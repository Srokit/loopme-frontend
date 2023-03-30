const config = {
    'apiBaseUrl': (process.env.NODE_ENV === 'production') ? 'https://loopme-backend.herokuapp.com' : 'http://localhost:5002',
}

export default config;