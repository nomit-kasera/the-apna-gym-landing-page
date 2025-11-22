"use client";

import {
    Box,
    Flex,
    HStack,
    Text,
    IconButton,
    Image,
    DrawerRoot,
    DrawerBackdrop,
    DrawerBody,
    DrawerContent,
    DrawerPositioner,
    DrawerCloseTrigger,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
    const { open, onOpen, onClose } = useDisclosure();

    // Reusable hover style
    const hoverStyle = {
        color: "primary",
        textDecoration: "underline",
        textUnderlineOffset: "4px",
    };

    return (
        <>
            {/* HEADER */}
            <Box
                as="header"
                bg="gray.900"
                color="white"
                boxShadow="lg"
                position="sticky"
                top={0}
                zIndex={50}
            >
                <Flex
                    maxW="7xl"
                    mx="auto"
                    px={{ base: 4, md: 6, lg: 8 }}
                    py={4}
                    align="center"
                    justify="space-between"
                >
                    {/* LOGO */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <Flex
                            w="50px"
                            h="50px"
                            rounded="full"
                            overflow="hidden"
                            align="center"
                            justify="center"
                        >
                            <Image src="/logo.jpeg" alt="The Apna Gym Logo" boxSize="50px" rounded="full" />
                        </Flex>

                        <Text fontWeight="bold" className="text-primary" fontSize="2xl">
                            The Apna Gym
                        </Text>
                    </Link>

                    {/* DESKTOP NAV */}
                    <HStack gap={8} display={{ base: "none", md: "flex" }}>
                        <Link href="/">
                            <Text _hover={hoverStyle} fontWeight={"bold"}>Home</Text>
                        </Link>
                        <Link href="/about">
                            <Text _hover={hoverStyle} fontWeight={"bold"}>About</Text>
                        </Link>
                        <Link href="/contact">
                            <Text _hover={hoverStyle} fontWeight={"bold"}>Contact</Text>
                        </Link>
                        <Link href="/membership">
                            <Text _hover={hoverStyle} fontWeight={"bold"}>My Membership</Text>
                        </Link>
                    </HStack>

                    {/* MOBILE MENU ICON */}
                    <IconButton
                        aria-label="Open Menu"
                        display={{ base: "flex", md: "none" }}
                        onClick={onOpen}
                        variant="ghost"
                        color="white"
                        fontSize="xl"
                    >
                        <Menu size={24} />
                    </IconButton>
                </Flex>
            </Box>

            {/* MOBILE DRAWER */}
            <DrawerRoot open={open} onOpenChange={(e) => (e.open ? onOpen() : onClose())} placement="end">
                <DrawerBackdrop />
                <DrawerPositioner>
                    <DrawerContent bg="gray.900" color="white">
                        <DrawerCloseTrigger />

                        <DrawerBody mt={10}>
                            <VStack align="start" gap={6} fontSize="xl">
                                <Link href="/" onClick={onClose}>
                                    <Text _hover={hoverStyle} fontWeight={"bold"}>Home</Text>
                                </Link>
                                <Link href="/about" onClick={onClose}>
                                    <Text _hover={hoverStyle} fontWeight={"bold"}>About</Text>
                                </Link>
                                <Link href="/contact" onClick={onClose}>
                                    <Text _hover={hoverStyle} fontWeight={"bold"}>Contact</Text>
                                </Link>
                                <Link href="/membership" onClick={onClose}>
                                    <Text _hover={hoverStyle} fontWeight={"bold"}>My Membership</Text>
                                </Link>
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerPositioner>
            </DrawerRoot>
        </>
    );
}
