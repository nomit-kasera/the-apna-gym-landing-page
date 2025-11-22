import type { Metadata } from "next";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
    title: "The Apna Gym - Your Fitness Journey Starts Here",
    description:
        "Join The Apna Gym - Premium fitness facility with flexible membership plans. Transform your body and mind with expert trainers and state-of-the-art equipment.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box lang="en">
            <Box className="font-sans antialiased flex flex-col min-h-screen">

                <Header />

                {/* MAIN CONTENT */}
                <main className="flex-grow">
                    {children}
                </main>

                <Footer />
            </Box>
        </Box>
    );
}
