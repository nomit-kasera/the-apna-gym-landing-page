"use client";

import { Box, Grid, GridItem, Text, VStack, Separator } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Box bg="gray.900" color="gray.100" mt={16} py={12}>
            <Box maxW="7xl" mx="auto" px={{ base: 4, md: 6, lg: 8 }}>
                <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8} mb={8}>
                    {/* Column 1 */}
                    <GridItem>
                        <Text fontSize="lg" fontWeight="bold" className="text-primary" mb={4}>
                            The Apna Gym
                        </Text>
                        <Text fontSize="sm" opacity={0.9}>
                            Your ultimate fitness destination for strength, power, and transformation.
                        </Text>
                    </GridItem>

                    {/* Column 2 */}
                    <GridItem>
                        <Text fontWeight="bold" mb={4}>
                            Quick Links
                        </Text>
                        <VStack align="start" gap={2} fontSize="sm">
                            <Link className="text-primary" href="/" passHref >
                                <Text _hover={{ color: "#FFFFFF" }}>Home</Text>
                            </Link>

                            <Link className="text-primary" href="/about" passHref >
                                <Text _hover={{ color: "#FFFFFF" }}>About Us</Text>
                            </Link>

                            <Link className="text-primary" href="/contact" passHref >
                                <Text _hover={{ color: "#FFFFFF" }}>Contact</Text>
                            </Link>

                            <Link className="text-primary" href="/membership" passHref >
                                <Text _hover={{ color: "#FFFFFF" }}>My Membership</Text>
                            </Link>
                        </VStack>
                    </GridItem>

                    {/* Column 3 */}
                    <GridItem>
                        <Text fontWeight="bold" mb={4}>
                            Contact Info
                        </Text>
                        <VStack align="start" gap={2} fontSize="sm" opacity={0.9}>
                            <Text>📍 123 Fitness Street, City</Text>
                            <Text>📞 +91 98765-43210</Text>
                            <Text>✉️ info@theapnagym.com</Text>
                        </VStack>
                    </GridItem>

                    {/* Column 4 */}
                    <GridItem>
                        <Text fontWeight="bold" mb={4}>
                            Hours
                        </Text>
                        <VStack align="start" gap={2} fontSize="sm" opacity={0.9}>
                            <Text>Mon - Fri: 6AM - 10PM</Text>
                            <Text>Sat - Sun: 7AM - 8PM</Text>
                            <Text>Holidays: Closed</Text>
                        </VStack>
                    </GridItem>
                </Grid>

                <Separator />
                {/* Bottom section */}
                <Box borderTop="1px" borderColor="gray.700" pt={8} textAlign="center">
                    <Text fontSize="sm" opacity={0.75}>
                        © 2025 The Apna Gym. All rights reserved. | Unleash Your Strength
                    </Text>
                </Box>
            </Box>
        </Box>
    );
}
