import React from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <Form layout="vertical" onFinish={onFinish} className="max-w-md mx-auto">
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-600">
            Submit
          </Button>
        </Form>
        <Divider />
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;