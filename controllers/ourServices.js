const Services= require( '../models/ourservices.js');

exports.getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load services.' });
  }
};

exports.createService = async (req, res) => {
  try {
    const newService = new Services(req.body);
    await newService.save();
    res.status(201).json(newService);
  } catch (err) {
    res.status(500).json({ message: 'Error creating service.' });
  }
};
