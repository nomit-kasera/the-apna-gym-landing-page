"use client";

import { useState } from "react";
import {
    Box,
    Heading,
    Text,
    Flex,
    Grid,
    VStack,
    Input,
    Button,
    Spinner
} from "@chakra-ui/react";
import Link from "next/link";
import { Check, Search } from "lucide-react";

export default function MembershipScreen() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [searched, setSearched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Mock Database
    const mockMembers: Record<string, any> = {
        "9876543210": {
            name: "Raj Kumar",
            plan: "Annual",
            startDate: "2024-11-22",
            endDate: "2025-11-25",
            status: "active",
            features: [
                "Unlimited gym access",
                "All equipment access",
                "Premium locker facility",
                "VIP support 24/7",
                "4 Free fitness consultations",
                "Free nutrition guide",
            ],
        },
        "9123456789": {
            name: "Priya Singh",
            plan: "Half Yearly",
            startDate: "2024-09-22",
            endDate: "2025-03-22",
            status: "active",
            features: [
                "Unlimited gym access",
                "All equipment access",
                "Premium locker facility",
                "Priority support",
                "1 Free fitness consultation",
            ],
        },
        "8765432109": {
            name: "Anil Patel",
            plan: "Monthly",
            startDate: "2025-10-22",
            endDate: "2025-11-22",
            status: "expired",
            features: [
                "Unlimited gym access",
                "Basic equipment access",
                "Locker facility",
                "Standard support",
            ],
        },
    };

    const handleSearch = (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setSearched(true);
        }, 600);
    };

    const member = mockMembers[mobileNumber];
    const isActive = member?.status === "active";

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const daysRemaining = member
        ? Math.ceil(
            (new Date(member.endDate).getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24)
        )
        : 0;

    return (
        <Box minH="100vh" bg={"background"}>

            {/* HERO SECTION */}
            <Box position="relative" py={{ base: 12, md: 24 }} overflow="hidden">
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    w="96"
                    h="96"
                    bg="primary/10"
                    rounded="full"
                    filter="blur(80px)"
                    zIndex={-1}
                />
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    w="96"
                    h="96"
                    bg="primary/5"
                    rounded="full"
                    filter="blur(90px)"
                    zIndex={-1}
                />

                <Box maxW="4xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
                    <Box textAlign="center" mb={10}>
                        <Heading
                            fontSize={{ base: "3xl", md: "5xl" }}
                            fontWeight="black"
                            mb={4}
                            className="text-secondary"
                            lineHeight="1.2"
                        >
                            Check Your <span className="text-primary">Membership Status</span>
                        </Heading>

                        <Text fontSize={{ base: "md", md: "lg" }} color="#000000">
                            Enter your registered mobile number to view your membership details
                            and benefits.
                        </Text>
                    </Box>

                    {/* Search Card */}
                    <Box
                        bg="card"
                        border="1px solid"
                        borderColor="border"
                        rounded="2xl"
                        p={{ base: 6, md: 10 }}
                        shadow="xl"
                    >
                        <form onSubmit={handleSearch}>
                            <VStack gap={6}>
                                <Box w="100%">
                                    <Text fontSize="sm" fontWeight="bold" mb={2} className="text-secondary">
                                        Mobile Number
                                    </Text>

                                    <Flex gap={3} direction={{ base: "column", sm: "row" }}>
                                        <Input
                                            type="tel"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            placeholder="Enter 10-digit mobile number"
                                            value={mobileNumber}
                                            onInput={(e: any) => {
                                                const v = e.target.value;
                                                if (/^\d{0,10}$/.test(v)) {
                                                    setMobileNumber(v);
                                                    setSearched(false);
                                                }
                                            }}
                                            py={3}
                                            fontSize="lg"
                                            color={"#000000"}
                                        />



                                        <Button
                                            type="submit"
                                            bg="primary"
                                            color="primary-foreground"
                                            px={8}
                                            py={6}
                                            fontWeight="bold"
                                            rounded="lg"
                                            disabled={mobileNumber.length !== 10 || isLoading}
                                            _hover={{ opacity: 0.9 }}
                                        >
                                            {isLoading ? <Spinner /> : <Search size={20} />}
                                        </Button>
                                    </Flex>
                                </Box>
                            </VStack>
                        </form>
                    </Box>
                </Box>
            </Box>

            {/* RESULTS SECTION */}
            {searched && (
                <Box py={{ base: 12, md: 20 }}>
                    <Box maxW="4xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>

                        {/* ACTIVE MEMBERSHIP */}
                        {member && isActive && (
                            <Box>
                                <Box
                                    bg={"primary"}
                                    rounded="2xl"
                                    p={{ base: 6, md: 12 }}
                                    shadow="2xl"
                                    mb={10}
                                    color="white"
                                >
                                    <Flex justify="space-between" align="flex-start" mb={10}>
                                        <Box>
                                            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="black">
                                                {member.name}
                                            </Heading>
                                            <Text opacity={0.8}>Member ID: {mobileNumber}</Text>
                                        </Box>

                                        <Box
                                            bg="green.400"
                                            color="black"
                                            px={6}
                                            py={2}
                                            rounded="full"
                                            fontWeight="black"
                                            shadow="lg"
                                        >
                                            ACTIVE
                                        </Box>
                                    </Flex>

                                    {/* Membership details */}
                                    <Grid
                                        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
                                        gap={6}
                                        mb={10}
                                    >
                                        {[
                                            { label: "Plan", value: member.plan },
                                            { label: "Valid From", value: formatDate(member.startDate) },
                                            { label: "Expires On", value: formatDate(member.endDate) },
                                            { label: "Days Remaining", value: daysRemaining },
                                        ].map((item, idx) => (
                                            <Box key={idx} bg="whiteAlpha.200" rounded="xl" p={4}>
                                                <Text opacity={0.7} fontSize="sm" fontWeight="semibold">
                                                    {item.label}
                                                </Text>
                                                <Text
                                                    fontSize={idx === 3 ? "2xl" : "lg"}
                                                    fontWeight="black"
                                                    color={idx === 3 ? "green.300" : "white"}
                                                >
                                                    {item.value}
                                                </Text>
                                            </Box>
                                        ))}
                                    </Grid>

                                    {/* Features */}
                                    <Text opacity={0.8} fontWeight="bold" mb={4}>
                                        Your Benefits Include:
                                    </Text>

                                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                                        {member.features.map((feature: string, idx: number) => (
                                            <Flex key={idx} gap={3}>
                                                <Check size={22} color="#4ade80" />
                                                <Text>{feature}</Text>
                                            </Flex>
                                        ))}
                                    </Grid>
                                </Box>

                                {/* FOOTER CARD */}
                                <Box
                                    bg="card"
                                    border="1px solid"
                                    borderColor="border"
                                    rounded="xl"
                                    p={6}
                                    textAlign="center"
                                >
                                    <Text color="mutedForeground" mb={4}>
                                        Your membership is active and you have full access to all gym
                                        facilities!
                                    </Text>

                                    <Link href="/">
                                        <Button
                                            bg="primary"
                                            color="primary-foreground"
                                            px={8}
                                            py={5}
                                            fontWeight="bold"
                                            rounded="lg"
                                            _hover={{ opacity: 0.9 }}
                                        >
                                            Back to Home
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        )}

                        {/* EXPIRED MEMBERSHIP */}
                        {member && !isActive && (
                            <Box textAlign="center">
                                <Box
                                    bg={"primary"}
                                    rounded="2xl"
                                    p={{ base: 6, md: 12 }}
                                    shadow="2xl"
                                    mb={10}
                                >
                                    <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="black">
                                        {member.name}
                                    </Heading>
                                    <Text opacity={0.7}>Member ID: {mobileNumber}</Text>

                                    <Grid
                                        mt={10}
                                        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                                        gap={6}
                                    >
                                        <Box bg="whiteAlpha.200" rounded="xl" p={4}>
                                            <Text opacity={0.7} fontSize="sm">
                                                Plan
                                            </Text>
                                            <Text fontSize="2xl" fontWeight="black">
                                                {member.plan}
                                            </Text>
                                        </Box>

                                        <Box bg="whiteAlpha.200" rounded="xl" p={4}>
                                            <Text opacity={0.7} fontSize="sm">
                                                Valid From
                                            </Text>
                                            <Text fontSize="lg" fontWeight="black">
                                                {formatDate(member.startDate)}
                                            </Text>
                                        </Box>

                                        <Box bg="whiteAlpha.200" rounded="xl" p={4}>
                                            <Text opacity={0.7} fontSize="sm">
                                                Expired On
                                            </Text>
                                            <Text fontSize="lg" fontWeight="black">
                                                {formatDate(member.endDate)}
                                            </Text>
                                        </Box>
                                    </Grid>
                                </Box>

                                <Heading fontSize="2xl" className="text-secondary" mb={4}>
                                    Your membership has expired
                                </Heading>

                                <Text color="mutedForeground" maxW="2xl" mx="auto" mb={10}>
                                    Don&apos;t miss out on your fitness journey! Renew your membership now
                                    and get back to achieving your goals.
                                </Text>

                                <Flex
                                    direction={{ base: "column", sm: "row" }}
                                    gap={4}
                                    justify="center"
                                >
                                    <Link href="/contact">
                                        <Button
                                            bg="primary"
                                            color="primary-foreground"
                                            px={10}
                                            py={4}
                                            rounded="lg"
                                            fontWeight="bold"
                                            _hover={{ opacity: 0.9 }}
                                        >
                                            Renew Membership
                                        </Button>
                                    </Link>

                                    <Link href="/">
                                        <Button
                                            variant="outline"
                                            borderColor="primary"
                                            color="primary"
                                            px={10}
                                            py={4}
                                            rounded="lg"
                                            fontWeight="bold"
                                            _hover={{ bg: "primary/10" }}
                                        >
                                            View Plans
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                        )}

                        {/* NO MEMBERSHIP FOUND */}
                        {!member && (
                            <Box textAlign="center">
                                <Box
                                    w="24"
                                    h="24"
                                    mx="auto"
                                    bg="primary"
                                    rounded="full"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mb={8}
                                >
                                    <Search size={40} />
                                </Box>

                                <Heading fontSize="3xl" className="text-secondary" mb={4}>
                                    No Membership Found
                                </Heading>

                                <Text maxW="2xl" mx="auto" color="#484848" mb={10}>
                                    We couldn&apos;t find a membership associated with this mobile number.
                                    Start your fitness transformation today!
                                </Text>

                                <Box
                                    bg="card"
                                    border="2px solid"
                                    borderColor="primary/20"
                                    rounded="2xl"
                                    p={{ base: 6, md: 10 }}
                                    mb={10}
                                >
                                    <Heading fontSize="2xl" className="text-secondary" mb={4}>
                                        Ready to Join?
                                    </Heading>

                                    <Text color="mutedForeground" maxW="lg" mx="auto" mb={8}>
                                        Choose from our flexible membership plans and unlock access to
                                        world-class facilities, expert trainers, and a supportive
                                        community.
                                    </Text>

                                    <Flex
                                        direction={{ base: "column", sm: "row" }}
                                        gap={4}
                                        justify="center"
                                    >
                                        <Link href="/contact">
                                            <Button
                                                bg="primary"
                                                color="primary-foreground"
                                                px={10}
                                                py={4}
                                                rounded="lg"
                                                fontWeight="bold"
                                                _hover={{ opacity: 0.9 }}
                                            >
                                                Join Now
                                            </Button>
                                        </Link>

                                        <Link href="/">
                                            <Button
                                                variant="outline"
                                                borderColor="primary"
                                                color="primary"
                                                px={10}
                                                py={4}
                                                rounded="lg"
                                                fontWeight="bold"
                                                _hover={{ bg: "primary/10" }}
                                            >
                                                View Membership Plans
                                            </Button>
                                        </Link>
                                    </Flex>
                                </Box>

                                <Link href="/">
                                    <Button
                                        variant="outline"
                                        borderColor="border"
                                        color="secondary"
                                        px={8}
                                        py={3}
                                        rounded="lg"
                                    >
                                        ← Back to Home
                                    </Button>
                                </Link>
                            </Box>
                        )}
                    </Box>
                </Box>
            )}
        </Box>
    );
}
