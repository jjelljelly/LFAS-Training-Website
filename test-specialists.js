// Test script to verify Contentful specialists data
const fs = require('fs');
const path = require('path');
const https = require('https');

// Try to load .env or .env.local
let space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
let token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

// If not in env, try reading from .env file
if (!space || !token) {
    const envFiles = ['.env.local', '.env'];
    for (const envFile of envFiles) {
        try {
            const envPath = path.join(__dirname, envFile);
            const envContent = fs.readFileSync(envPath, 'utf8');
            const lines = envContent.split('\n');
            lines.forEach(line => {
                const match = line.match(/^([^=]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2].trim().replace(/^["']|["']$/g, '');
                    if (key === 'NEXT_PUBLIC_CONTENTFUL_SPACE_ID') space = value;
                    if (key === 'NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN') token = value;
                }
            });
            if (space && token) break;
        } catch (err) {
            // File doesn't exist, try next
        }
    }
}

console.log('Space ID:', space ? 'Found' : 'Missing');
console.log('Access Token:', token ? 'Found' : 'Missing');

function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve({ status: res.statusCode, data: JSON.parse(data) });
                } catch (err) {
                    reject(err);
                }
            });
        }).on('error', reject);
    });
}

async function testSpecialistsPage() {
    const SPECIALIST_CONTENT_TYPE = 'specialistsPage';
    const ENVIRONMENT = 'master';

    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?content_type=${SPECIALIST_CONTENT_TYPE}&include=2&access_token=${token}`;

    console.log('\n--- Testing specialistsPage content type ---');
    console.log('URL:', url.replace(token, 'HIDDEN'));

    try {
        const res = await httpsGet(url);
        const data = res.data;

        console.log('\nResponse Status:', res.status);
        console.log('Total Items:', data.total);
        console.log('Items Found:', data.items?.length || 0);

        if (data.items && data.items.length > 0) {
            console.log('\n--- First Item ---');
            console.log('ID:', data.items[0].sys.id);
            console.log('Content Type:', data.items[0].sys.contentType?.sys?.id);
            console.log('Fields:', Object.keys(data.items[0].fields || {}));
            console.log('\nFull Item:', JSON.stringify(data.items[0], null, 2));
        } else {
            console.log('\nNo items found. Full response:', JSON.stringify(data, null, 2));
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

async function listAllContentTypes() {
    const ENVIRONMENT = 'master';
    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/content_types?access_token=${token}`;

    console.log('\n--- Listing All Content Types ---');

    try {
        const res = await httpsGet(url);
        const data = res.data;

        console.log('Content Types Found:', data.items?.length || 0);

        if (data.items && data.items.length > 0) {
            console.log('\nAvailable Content Types:');
            data.items.forEach(ct => {
                console.log(`  - ${ct.sys.id} (${ct.name})`);
            });
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

async function testAllEntries() {
    const ENVIRONMENT = 'master';
    const url = `https://cdn.contentful.com/spaces/${space}/environments/${ENVIRONMENT}/entries?include=2&access_token=${token}`;

    console.log('\n--- Testing All Entries ---');

    try {
        const res = await httpsGet(url);
        const data = res.data;

        console.log('Total Entries:', data.total);
        console.log('Entries Found:', data.items?.length || 0);

        if (data.items && data.items.length > 0) {
            console.log('\nContent Types in Entries:');
            const contentTypes = new Set();
            data.items.forEach(item => {
                const ctId = item.sys.contentType?.sys?.id;
                if (ctId) contentTypes.add(ctId);
            });
            contentTypes.forEach(ct => console.log(`  - ${ct}`));
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

async function run() {
    if (!space || !token) {
        console.error('Missing Contentful credentials!');
        return;
    }

    await listAllContentTypes();
    await testAllEntries();
    await testSpecialistsPage();
}

run();
