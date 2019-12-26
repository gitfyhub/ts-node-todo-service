import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

import cors from 'cors';


// Allow Single Origin:
// app.use(cors({
//     origin: 'http://localhost:8080'
// }));

// Allow Multip Origin:
const allowedOrigins =
    [
        'http://localhost:5500',
        'http://127.0.0.1:5500',
        'http://localhost:8080',
        'http://192.168.1.12:8080',
        'http://localhost:61063'
    ];

app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            let msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json([{ "userId": 1, "id": 1, "title": "Step 1", "completed": false }, { "userId": 1, "id": 2, "title": "Step 2", "completed": false }, { "userId": 1, "id": 3, "title": "Step 3", "completed": false }, { "userId": 1, "id": 4, "title": "Step 4", "completed": true }, { "userId": 1, "id": 5, "title": "Step 5", "completed": false }])
});

app.listen(5000, () => console.log('Server running on port: 5000'));