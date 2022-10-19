const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid');

router.get('/', (req, res) => {
    res.json(members);
});

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }    
});

router.post('/', (req, res) => {

    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if (!newMember.name || !newMember.email) {
        res.status(400).json({msg: 'Missing mandatory info'});
    }

    members.push(newMember);
    res.json(newMember);
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        const updMember = req.body;
        members.forEach(member => {
            if (member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({msg: "Member updated", member});
            }
        });
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }    
});

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json({
            msg: `Member ${req.params.id} deleted`,
            members: members.filter(member => member.id !== parseInt(req.params.id))
        });
    } else {
        res.status(400).json({msg: `Member ${req.params.id} not found`});
    }    
});

module.exports = router;