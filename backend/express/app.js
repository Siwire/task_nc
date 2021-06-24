const express = require('express');
const bodyParser = require('body-parser');
const { models } = require('../sequelize');
const multer  = require('multer');
const fs = require('fs');
const PDFGenerator = require('pdfkit');

const app = express();
const upload = multer({ dest: 'uploads/' });
let theOutput = new PDFGenerator();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/users', upload.single('image'), async (req, res) => {
    const imagePath = `${req.file.destination}${req.file.filename}`;
    const image = fs.readFileSync(imagePath);
    
    const { firstName, lastName } = req.body;

    const savedUser = await models.users.create({ firstName, lastName, image });
    fs.unlinkSync(imagePath);
    res.send(savedUser);
});

app.get('/users/:firstName', async (req, res) => {
    const { firstName } = req.params;
    const user = await models.users.findOne({ where: { firstName } });
    if (!user) {
        return res.send({ message: 'User not found' });
    }
    const imageFileName = `${user.id}-${user.firstName}.png`;
    const buf = new Buffer(user.image, "binary");
    fs.writeFile(imageFileName, buf, async (err, data) => {
        const pdfPath = `${user.id}-${user.firstName}.pdf`;

        theOutput.pipe(fs.createWriteStream(pdfPath));
        theOutput.text(`${user.firstName} ${user.lastName}`);
        theOutput.image(imageFileName, { fit: [250,250] });
    
        const pdf = fs.readFileSync(pdfPath);
        await user.update({ pdf }, { id: user.id });
        fs.unlinkSync(imageFileName);
        fs.unlinkSync(pdfPath);

        return res.send({ result: true });
    });
});

module.exports = app;
