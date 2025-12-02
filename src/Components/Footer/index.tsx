"use client";

import { Box, Grid, GridItem, Text, VStack, Separator, HStack } from "@chakra-ui/react";
import { Mail, MapPin, Phone } from "lucide-react";
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
                            <HStack>
                                <MapPin size={28} />
                                <Text>
                                    1st floor Sai Complex, Main Road, Bishrampur, Chhattisgarh
                                </Text>
                            </HStack>

                            <HStack>
                                <Phone size={18} />
                                <HStack>
                                    <Link
                                        href="tel:+917999693682"
                                        color="blue.400"
                                    >
                                        +91 7999693682
                                    </Link>

                                    <Text>,</Text>

                                    <Link
                                        href="tel:+918234033694"
                                        color="blue.400"
                                    >
                                        8234033694
                                    </Link>
                                </HStack>
                            </HStack>


                            <HStack>
                                <Mail size={18} />
                                <Link
                                    href="mailto:theapnagym@gmail.com"
                                    color="blue.400"
                                >
                                    theapnagym@gmail.com
                                </Link>
                            </HStack>
                        </VStack>

                    </GridItem>

                    {/* Column 4 */}
                    <GridItem>
                        <Text fontWeight="bold" mb={4}>
                            Hours
                        </Text>
                        <VStack align="start" gap={2} fontSize="sm" opacity={0.9}>
                            <Text>Mon - Sat: 5AM - 10PM</Text>
                            <Text>Sun: 7AM - 8PM</Text>
                            <Text>For Females: 2PM - 5PM</Text>
                            <Text>Holidays: Closed</Text>
                        </VStack>
                    </GridItem>
                </Grid>

                <Separator />
                {/* Bottom section */}
                <Box borderTop="1px" borderColor="gray.700" pt={8} textAlign="center">
                    <Text fontSize="sm" opacity={0.75}>
                        © {new Date().getFullYear()} The Apna Gym. All rights reserved. | Unleash Your Strength
                    </Text>

                    <Text fontSize="sm" opacity={0.8} mt={2}>
                        Developed and maintained by{" "}
                        <Link
                            href="https://quartilelabs.com"
                            target="_blank"
                            className="text-primary"
                        >
                            Quartile Labs
                        </Link>
                    </Text>
                </Box>

            </Box>
        </Box>
    );
}
