"use client";

import {
    Box,
    Flex,
    Grid,
    VStack,
    HStack,
    Text,
    Heading,
    Button,
    Image,
    Highlight
} from "@chakra-ui/react";
import Link from "next/link";

export default function HomeScreen() {
    const membershipPlans = [
        {
            name: "Monthly",
            duration: "1 Month",
            price: "₹999",
            features: [
                "Unlimited gym access",
                "Basic equipment access",
                "Locker facility",
                "Standard support",
            ],
            popular: false,
        },
        {
            name: "Half Yearly",
            duration: "6 Months",
            price: "₹4,999",
            savings: "Save ₹1,000",
            features: [
                "Unlimited gym access",
                "All equipment access",
                "Premium locker facility",
                "Priority support",
                "1 Free fitness consultation",
            ],
            popular: true,
        },
        {
            name: "Annual",
            duration: "12 Months",
            price: "₹8,999",
            savings: "Save ₹3,000",
            features: [
                "Unlimited gym access",
                "All equipment access",
                "Premium locker facility",
                "VIP support 24/7",
                "4 Free fitness consultations",
                "Free nutrition guide",
            ],
            popular: false,
        },
    ];

    const primaryColor = "#ef4b6e";

    return (
        <Box>
            {/* HERO SECTION */}
            <Box
                bg="secondary"
                color="secondary-foreground"
                minH="100vh"
                py={{ base: 12, md: 24 }}
                display="flex"
                alignItems="center"
            >
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} w="100%">
                    <Grid
                        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                        gap={{ base: 12, md: 16 }}
                        alignItems="center"
                        textAlign={{ base: "center", md: "left" }}
                    >
                        {/* LEFT CONTENT */}
                        <Box>
                            <Heading
                                as="h1"
                                fontWeight="bold"
                                fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                                lineHeight="1.2"
                                mb={{ base: 4, md: 6 }}
                            >
                                <Text as="span" color={primaryColor} display="block">
                                    Unleash Your
                                </Text>
                                <Text as="span" mt={2} display="block">
                                    Inner Beast
                                </Text>
                            </Heading>

                            <Text
                                fontSize={{ base: "md", md: "xl" }}
                                opacity={0.9}
                                mb={{ base: 6, md: 8 }}
                                px={{ base: 2, md: 0 }}
                            >
                                Join The Apna Gym and transform your body with cutting-edge
                                equipment, expert trainers, and a community that pushes you to be better.
                            </Text>

                            <HStack
                                gap={4}
                                justify={{ base: "center", md: "flex-start" }}
                                wrap="wrap"
                            >
                                <Link href="/contact">
                                    <Button
                                        bg={primaryColor}
                                        color="white"
                                        _hover={{ bg: primaryColor, opacity: 0.9 }}
                                        px={{ base: 6, md: 8 }}
                                        py={{ base: 5, md: 6 }}
                                        fontSize={{ base: "md", md: "lg" }}
                                        w={{ base: "full", sm: "auto" }}
                                    >
                                        Join Now
                                    </Button>
                                </Link>

                                <Link href="/about">
                                    <Button
                                        variant="outline"
                                        borderColor={primaryColor}
                                        color={primaryColor}
                                        _hover={{ bg: primaryColor, color: "white" }}
                                        px={{ base: 6, md: 8 }}
                                        py={{ base: 5, md: 6 }}
                                        fontSize={{ base: "md", md: "lg" }}
                                        w={{ base: "full", sm: "auto" }}
                                    >
                                        Learn More
                                    </Button>
                                </Link>
                            </HStack>
                        </Box>

                        {/* RIGHT IMAGE */}
                        <Flex justify={{ base: "center", md: "center" }}>
                            <Image
                                src="/logo.jpeg"
                                alt="The Apna Gym Logo"
                                w={{ base: "70%", sm: "60%", md: "80%" }}
                                maxW="350px"
                                filter="drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
                            />
                        </Flex>
                    </Grid>
                </Box>
            </Box>


            {/* WHY CHOOSE US */}
            <Box py={{ base: 16, md: 24 }} bg="background">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading
                        textAlign="center"
                        mb={16}
                        fontWeight="bold"
                        fontSize={["3xl", "4xl", "5xl"]}
                        color="#000000"
                        as={"h1"}
                    >
                        {/* Why Choose The Apna Gym? */}

                        <Highlight query={"The Apna Gym?"} styles={{ color: "#ef4b6e" }}>Why Choose The Apna Gym?</Highlight>
                    </Heading>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={8}>
                        {[
                            {
                                icon: "🏋️",
                                title: "State-of-the-Art Equipment",
                                description:
                                    "Latest fitness equipment and technology to maximize your workout results.",
                            },
                            {
                                icon: "👨‍🏫",
                                title: "Expert Trainers",
                                description:
                                    "Certified and experienced trainers to guide you on your fitness journey.",
                            },
                            {
                                icon: "👥",
                                title: "Community Support",
                                description:
                                    "Join a supportive community of fitness enthusiasts and achieve your goals together.",
                            },
                            {
                                icon: "🛒",
                                title: "Nutrition Guidance",
                                description:
                                    "Professional nutrition consultation to complement your workout routine.",
                            },
                            {
                                icon: "📱",
                                title: "Fitness Tracking",
                                description:
                                    "Digital tracking tools to monitor your progress and stay motivated.",
                            },
                            {
                                icon: "✨",
                                title: "Clean & Hygienic",
                                description:
                                    "Immaculate facilities maintained to the highest cleanliness standards.",
                            },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                bg="card"
                                border="1px solid"
                                borderColor="border"
                                p={8}
                                rounded="lg"
                                transition="0.2s"
                                _hover={{ shadow: "lg" }}
                            >
                                <Text fontSize="4xl" mb={4}>
                                    {item.icon}
                                </Text>

                                <Text fontSize="xl" color="#000000" fontWeight="bold" mb={3}>
                                    {item.title}
                                </Text>

                                <Text color="#484848">{item.description}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* MEMBERSHIP PLANS */}
            <Box py={{ base: 16, md: 24 }} bg="#dedede">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading
                        textAlign="center"
                        mb={4}
                        fontWeight="bold"
                        fontSize="4xl"
                        color={primaryColor}
                    >
                        Membership Plans
                    </Heading>

                    <Text textAlign="center" color="#484848" mb={16} fontSize="lg">
                        Choose the perfect plan for your fitness goals
                    </Text>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
                        {[
                            {
                                name: "Monthly",
                                duration: "1 Month",
                                price: "₹1099",
                                popular: false,
                            },
                            {
                                name: "Quarterly",
                                duration: "3 Months",
                                price: "₹2699",
                                popular: false,
                            },
                            {
                                name: "Half Yearly",
                                duration: "6 Months",
                                price: "₹5099",
                                popular: true, // MOST VALUABLE
                            },
                            {
                                name: "Yearly",
                                duration: "12 Months",
                                price: "₹9999",
                                popular: false,
                            },
                        ].map((plan, index) => (
                            <Box
                                key={index}
                                display="flex"
                                flexDirection="column"
                                rounded="lg"
                                overflow="hidden"
                                transition="0.2s"
                                transform={plan.popular ? "scale(1.05)" : "scale(1)"}
                                bg={plan.popular ? "#000000" : "#FFFFFF"}
                                color={plan.popular ? "#FFFFFF" : "#000000"}
                                border={plan.popular ? "2px solid" : "1px solid"}
                                borderColor={plan.popular ? primaryColor : "border"}
                                shadow={plan.popular ? "2xl" : "sm"}
                                _hover={{ transform: "scale(1.07)" }}
                            >
                                {plan.popular && (
                                    <Box
                                        bg={primaryColor}
                                        color="#FFFFFF"
                                        py={2}
                                        textAlign="center"
                                        fontWeight="bold"
                                    >
                                        MOST VALUABLE
                                    </Box>
                                )}

                                {/* Content */}
                                <Box p={8} flex="1" display="flex" flexDirection="column">
                                    <Text fontSize="2xl" fontWeight="bold" mb={2}>
                                        {plan.name}
                                    </Text>

                                    <Text fontSize="sm" opacity={0.75} mb={6}>
                                        {plan.duration}
                                    </Text>

                                    <Box mb={6}>
                                        <Text fontSize="4xl" fontWeight="bold" color={primaryColor} mb={2}>
                                            {plan.price}
                                        </Text>
                                    </Box>

                                    {/* Button */}
                                    <Box mt="auto">
                                        <Link href="/contact">
                                            <Button
                                                bg={primaryColor}
                                                color="white"
                                                _hover={{ opacity: 0.9 }}
                                                w="100%"
                                                py={6}
                                                fontWeight="bold"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>


            {/* CTA SECTION */}
            <Box bg="secondary" color="secondary-foreground" py={{ base: 16, md: 20 }}>
                <Box maxW="4xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} textAlign="center">
                    <Heading fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold" mb={6}>
                        Ready to Transform Your Life?
                    </Heading>

                    <Text fontSize="xl" opacity={0.9} mb={8}>
                        Join thousands of members who&apos;ve already started their fitness journey with us.
                    </Text>

                    <Link href="/contact">
                        <Button
                            bg={primaryColor}
                            color="primary-foreground"
                            _hover={{ bg: primaryColor, opacity: 0.9 }}
                            px={8}
                            py={6}
                            fontSize="lg"
                        >
                            Contact Us Today
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
