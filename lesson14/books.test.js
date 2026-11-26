
const axios = require('axios');
const jsonData = require('./env.json');

test('Verify books list', async () => {
    const response = await axios.get(
        `${jsonData.baseUrl}/BookStore/v1/Books`
    );

    expect(response.status).toBe(200);
    expect(response.data.books.length).toBeGreaterThan(0);
});

test('Verify book object properties', async () => {
    const response = await axios.get(
        `${jsonData.baseUrl}/BookStore/v1/Book?ISBN=9781449325862`
    );

    expect(response.data).toHaveProperty('isbn');
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('author');
    expect(response.data).toHaveProperty('publisher');
    expect(response.data).toHaveProperty('pages');
});

test('Verify deletion of books from the profile', async () => {
    const response = await axios.delete(
        `${jsonData.baseUrl}/BookStore/v1/Books?UserId=${jsonData.userId}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jsonData.token}`
            }
        }
    );

    expect(response.status).toBe(204);

});

test('Verify adding a book to the profile', async () => {
    const response = await axios.post(
        `${jsonData.baseUrl}/BookStore/v1/Books`,
        {
            userId: `${jsonData.userId}`,
            collectionOfIsbns: [
                {
                    isbn: '9781449365035'
                }
            ]
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jsonData.token}`
            }
        }
    );

    expect(response.status).toBe(201);
    expect(response.data.books[0].isbn).toBe('9781449365035');
});

test('Verify updating a book', async () => {
    const response = await axios.put(
        `${jsonData.baseUrl}/BookStore/v1/Books/9781449365035`,
        {
            userId: `${jsonData.userId}`,
            isbn: '9781449331818'
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jsonData.token}`
            }
        }
    );

    expect(response.status).toBe(200);
    expect(response.data.books[0].isbn).toBe('9781449331818');
});
