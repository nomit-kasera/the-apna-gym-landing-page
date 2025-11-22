"use client";

import { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Grid,
    Flex,
    VStack,
    Input,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactusScreen() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInput = (e: any) => {
        const { name, value } = e.target;

        // super-fast updates (no lag)
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log("Form Submitted:", formData);
        setSubmitted(true);

        setTimeout(() => {
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            setSubmitted(false);
        }, 2500);
    };

    return (
        <Box>

            {/* HERO SECTION */}
            <Box bg="secondary" color="secondary-foreground" py={{ base: 12, md: 20 }}>
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={6}>
                        Contact Us
                    </Heading>

                    <Text fontSize={{ base: "md", md: "xl" }} opacity={0.9} maxW="2xl">
                        Have questions? We&apos;d love to hear from you. Get in touch with us today!
                    </Text>
                </Box>
            </Box>

            {/* CONTACT SECTION */}
            <Box py={{ base: 12, md: 20 }} bg="white">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>

                        {/* CONTACT INFO */}
                        <Box>
                            <Heading
                                fontSize={{ base: "2xl", md: "3xl" }}
                                fontWeight="bold"
                                mb={8}
                                className="text-secondary"
                            >
                                Get In Touch
                            </Heading>

                            <VStack align="stretch" gap={8}>
                                {[
                                    {
                                        icon: <MapPin size={28} className="text-primary" />,
                                        title: "Address",
                                        details: "123 Fitness Street\nCity, State 12345\nCountry",
                                    },
                                    {
                                        icon: <Phone size={28} className="text-primary" />,
                                        title: "Phone",
                                        details: "+91 98765-43210\nMon-Fri: 9AM - 6PM",
                                    },
                                    {
                                        icon: <Mail size={28} className="text-primary" />,
                                        title: "Email",
                                        details: "info@theapnagym.com\nWe'll respond within 24 hours",
                                    },
                                    {
                                        icon: <Clock size={28} className="text-primary" />,
                                        title: "Hours",
                                        details: "Mon-Fri: 6AM - 10PM\nSat-Sun: 7AM - 8PM",
                                    },
                                ].map((item, index) => (
                                    <Flex key={index} gap={6} align="flex-start">
                                        <Box
                                            w="12"
                                            h="12"
                                            rounded="md"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            flexShrink={0}
                                            bg="primary/10"
                                        >
                                            {item.icon}
                                        </Box>

                                        <Box>
                                            <Heading fontSize="xl" fontWeight="bold" mb={2} className="text-secondary">
                                                {item.title}
                                            </Heading>
                                            <Text whiteSpace="pre-line" color="#484848">
                                                {item.details}
                                            </Text>
                                        </Box>
                                    </Flex>
                                ))}
                            </VStack>
                        </Box>

                        {/* CONTACT FORM */}
                        <Box bg="card" border="1px solid" borderColor="border" rounded="lg" p={8}>
                            <Heading
                                fontSize={{ base: "2xl", md: "3xl" }}
                                fontWeight="bold"
                                mb={8}
                                className="text-secondary"
                            >
                                Send Us a Message
                            </Heading>

                            {submitted ? (
                                <Box
                                    bg="primary/10"
                                    border="1px solid"
                                    borderColor="primary"
                                    rounded="lg"
                                    p={6}
                                    textAlign="center"
                                >
                                    <Text fontSize="lg" fontWeight="semibold" className="text-primary" mb={2}>
                                        ✓ Message Sent Successfully!
                                    </Text>
                                    <Text color="#484848">Thank you for contacting us. We&apos;ll get back to you soon.</Text>
                                </Box>
                            ) : (
                                <Box
                                    as="form"
                                    onSubmit={handleSubmit}
                                    display="flex"
                                    flexDirection="column"
                                    gap={6}
                                >
                                    {/* NAME */}
                                    <Box>
                                        <Text fontSize="sm" className="text-secondary" fontWeight="medium" mb={2}>
                                            Name
                                        </Text>
                                        <Input
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onInput={handleInput}
                                            color="#000000"
                                            required
                                        />
                                    </Box>

                                    {/* EMAIL */}
                                    <Box>
                                        <Text fontSize="sm" className="text-secondary" fontWeight="medium" mb={2}>
                                            Email
                                        </Text>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onInput={handleInput}
                                            color="#000000"
                                            required
                                        />
                                    </Box>

                                    {/* PHONE */}
                                    <Box>
                                        <Text fontSize="sm" className="text-secondary" fontWeight="medium" mb={2}>
                                            Phone
                                        </Text>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="+91 98765-43210"
                                            value={formData.phone}
                                            onInput={handleInput}
                                            color="#000000"
                                            required
                                        />
                                    </Box>

                                    {/* SUBJECT */}
                                    <Box>
                                        <Text fontSize="sm" className="text-secondary" fontWeight="medium" mb={2}>
                                            Subject
                                        </Text>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onInput={handleInput}
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="membership">Membership Inquiry</option>
                                            <option value="training">Personal Training</option>
                                            <option value="facilities">Facilities Question</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </Box>

                                    {/* MESSAGE */}
                                    <Box>
                                        <Text fontSize="sm" className="text-secondary" fontWeight="medium" mb={2}>
                                            Message
                                        </Text>
                                        <Textarea
                                            name="message"
                                            rows={5}
                                            placeholder="Your message here..."
                                            value={formData.message}
                                            onInput={handleInput}
                                            color={"#000000"}
                                            required
                                        />
                                    </Box>

                                    {/* SUBMIT BUTTON */}
                                    <Button
                                        type="submit"
                                        bg="#ef4b6e"
                                        _hover={{ bg: "#ef4b6e", opacity: 0.9 }}
                                        py={6}
                                        fontWeight="bold"
                                    >
                                        Send Message
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* MAP SECTION */}
            <Box bg="#dedede" py={{ base: 12, md: 20 }}>
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading
                        textAlign="center"
                        mb={8}
                        fontSize={{ base: "2xl", md: "3xl" }}
                        className="text-secondary"
                    >
                        Visit Us
                    </Heading>

                    <Box
                        bg="white"
                        border="1px solid"
                        borderColor="lightgray"
                        rounded="lg"
                        overflow="hidden"
                        h="96"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Text color="#484848" textAlign="center">
                            📍 Google Maps Integration will appear here
                        </Text>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}
