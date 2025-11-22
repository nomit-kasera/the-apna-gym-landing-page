"use client";

import {
    Box,
    Heading,
    Text,
    Grid,
    Flex,
    VStack,
} from "@chakra-ui/react";

export default function AboutScreen() {
    return (
        <Box>

            {/* Hero Section */}
            <Box bg="#000000" py={{ base: 12, sm: 16, md: 24 }}>
                <Box
                    maxW="7xl"
                    mx="auto"
                    px={{ base: 4, sm: 6, lg: 8 }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    <Heading
                        fontSize={{ base: "2.5xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="bold"
                        color="white"
                        mb={{ base: 4, md: 6 }}
                        lineHeight="1.2"
                    >
                        About The Apna Gym
                    </Heading>

                    <Text
                        fontSize={{ base: "md", sm: "lg", md: "xl" }}
                        opacity={0.9}
                        maxW={{ base: "100%", md: "2xl" }}
                        color="#cccccc"
                        mx={{ base: "auto", md: "0" }}
                    >
                        Your journey to strength and wellness starts here.
                    </Text>
                </Box>
            </Box>


            {/* Our Story */}
            <Box py={{ base: 16, md: 24 }} bg="background">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12} alignItems="center" mb={16}>
                        <Box>
                            <Heading fontSize="4xl" fontWeight="bold" mb={6} className="text-secondary">
                                Our Story
                            </Heading>

                            <Text fontSize="lg" color="#484848" mb={4}>
                                Founded in 2015, The Apna Gym was born from a passion for fitness and
                                community. We started with a simple vision: to create a gym that&apos;s
                                not just about lifting weights, but about building a supportive community
                                where everyone can achieve their fitness dreams.
                            </Text>

                            <Text fontSize="lg" color="#484848" mb={4}>
                                Over the years, we&apos;ve grown from a small local gym to a premier fitness
                                facility known for our state-of-the-art equipment, expert trainers, and
                                welcoming atmosphere.
                            </Text>

                            <Text fontSize="lg" color="#484848">
                                Today, we're proud to serve hundreds of members, each with their own
                                unique fitness journey, all united by a common goal: to be stronger,
                                healthier, and happier.
                            </Text>
                        </Box>

                        <Box
                            bgImage="url('/logo.jpeg')"
                            bgSize="cover"
                            bgRepeat="no-repeat"
                            rounded="lg"
                            minH={{ base: "320px", md: "380px", lg: "520px" }}  // responsive height
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            overflow="hidden"
                            position="relative"
                        >
                            {/* Glass Layer */}
                            <Box
                                position="absolute"
                                inset={0}
                                bg="rgba(0,0,0,0.45)"
                                backdropFilter="blur(5px)"
                            />

                            {/* Content */}
                            <Box position="relative" textAlign="center" color="white" p={8}>
                                <Text fontSize="6xl" fontWeight="bold" mb={4}>
                                    💪
                                </Text>
                                <Text fontSize="2xl" fontWeight="bold">
                                    Built on Strength & Passion
                                </Text>
                            </Box>
                        </Box>


                    </Grid>
                </Box>
            </Box>

            {/* Mission & Vision */}
            <Box py={{ base: 16, md: 24 }} bg="#dedede">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={12}>
                        <Box bg="#FFFFFF" border="1px solid" borderColor="lightgray" rounded="lg" p={8}>
                            <Heading fontSize="2xl" fontWeight="bold" mb={4} className="text-primary">
                                Our Mission
                            </Heading>
                            <Text fontSize="lg" color="#484848">
                                To empower every individual to achieve their fitness goals by providing
                                world-class facilities, expert guidance, and a supportive community that
                                inspires excellence and celebrates every milestone.
                            </Text>
                        </Box>

                        <Box bg="#FFFFFF" border="1px solid" borderColor="lightgray" rounded="lg" p={8}>
                            <Heading fontSize="2xl" fontWeight="bold" mb={4} className="text-primary">
                                Our Vision
                            </Heading>
                            <Text fontSize="lg" color="#484848">
                                To be the most trusted and preferred fitness destination, where strength
                                meets passion, and every member feels empowered to transform their life
                                and inspire others.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Box>

            {/* Core Values */}
            <Box py={{ base: 16, md: 24 }} bg="#FFFFFF">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading fontSize="4xl" fontWeight="bold" textAlign="center" mb={16} className="text-secondary">
                        Our Core Values
                    </Heading>

                    <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
                        {[
                            {
                                title: "Excellence",
                                description: "We strive for the highest quality in everything we do.",
                            },
                            {
                                title: "Community",
                                description: "We believe in the power of working together towards common goals.",
                            },
                            {
                                title: "Integrity",
                                description: "We operate with honesty and transparency in all our dealings.",
                            },
                            {
                                title: "Growth",
                                description: "We support continuous improvement and personal development.",
                            },
                        ].map((value, index) => (
                            <Box
                                key={index}
                                bg="card"
                                border="1px solid"
                                borderColor="border"
                                rounded="lg"
                                p={8}
                                textAlign="center"
                                transition="0.2s"
                                _hover={{ shadow: "lg" }}
                            >
                                <Heading fontSize="xl" fontWeight="bold" mb={3} className="text-primary">
                                    {value.title}
                                </Heading>
                                <Text color="#484848">{value.description}</Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Box>

            {/* Why We're Different */}
            <Box py={{ base: 12, md: 20 }} bg="#dedede">
                <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Heading
                        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                        fontWeight="bold"
                        textAlign="center"
                        mb={{ base: 10, md: 16 }}
                        className="text-secondary"
                    >
                        Why We're Different
                    </Heading>

                    <VStack gap={{ base: 8, md: 10 }} align="stretch">
                        {[
                            {
                                title: "100% Member-Focused",
                                description:
                                    "Every decision we make is centered around what's best for our members and their fitness journey.",
                            },
                            {
                                title: "Expert Team",
                                description:
                                    "Our trainers are certified professionals with years of experience in helping people achieve their goals.",
                            },
                            {
                                title: "Modern Facilities",
                                description:
                                    "We continuously upgrade and maintain our equipment to ensure you have access to the latest fitness technology.",
                            },
                            {
                                title: "Supportive Environment",
                                description:
                                    "We foster a non-judgmental, inclusive atmosphere where everyone feels welcome and motivated.",
                            },
                        ].map((item, index) => (
                            <Flex
                                key={index}
                                gap={6}
                                align="flex-start"
                                direction={{ base: "column", sm: "row" }}
                                textAlign={{ base: "center", sm: "left" }}
                            >
                                {/* Number Icon */}
                                <Box
                                    w="12"
                                    h="12"
                                    rounded="md"
                                    bg="#ef4b6e"
                                    color="#FFFFFF"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mx={{ base: "auto", sm: "0" }}
                                    flexShrink={0}
                                >
                                    <Text fontSize="xl" fontWeight="bold">
                                        {index + 1}
                                    </Text>
                                </Box>

                                {/* Content */}
                                <Box>
                                    <Heading
                                        fontSize={{ base: "lg", md: "xl" }}
                                        fontWeight="bold"
                                        mb={2}
                                        className="text-secondary"
                                    >
                                        {item.title}
                                    </Heading>

                                    <Text
                                        color="#484848"
                                        fontSize={{ base: "md", md: "lg" }}
                                        lineHeight="1.6"
                                    >
                                        {item.description}
                                    </Text>
                                </Box>
                            </Flex>
                        ))}
                    </VStack>
                </Box>
            </Box>


        </Box>
    );
}
