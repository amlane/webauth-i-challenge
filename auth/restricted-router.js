const router = require('express').Router();

router.get('/something', (req, res) => {
    res.status(200).json({ message: "You are authorized." })
})

module.exports = router;