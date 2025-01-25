"use client";
import Banner from "@/components/Banner";
import OurChefPageCard from "@/components/OurChefPageCard";
import { fetchProducts } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ChefType {
    imageUrl: string;
    name: string;
    position: string;
}

export default function OurChefPage() {
    const [chefData, setChefData] = useState<ChefType[] | null>(null);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        const loadData = async () => {
            try {
                const query = `*[_type == "chef"]{
                                    "imageUrl": image.asset->url, 
                                    name,
                                    position,
                                    }`;
                fetchProducts('api/ourchef').then((res) => {
                    if (res.error) {
                        setError(res.error);
                        return;
                    }
                    if (res.data) {
                        setChefData(res.data);
                    }
                    setError('');
                    setLoading(false);
                });
                // setChefData(data);
            } catch (err) {
                setError("Failed to load data");
                throw err;
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) return <div>Loading...</div>;
    

    return(
        <>
        <Banner Title="Sign In Page" Page="Sign in" />
        <div className="bg-white">
            <div className="container max-w-screen-lg mx-auto py-20 grid grid-cols-1 md:grid-cols-12 gap-4">
                {error && (
                        <p className="col-span-12 mx-auto mt-8">{error}</p>
                )}
               {chefData && chefData.map((chef, idx) => (
                <div key={idx} className="w-2/3 md:w-full md:col-span-3">
                    <OurChefPageCard ImagePath={chef.imageUrl} AltText={`Chef ${idx + 1}`} ChefName={chef.name} ChefTitle={chef.position} />
                </div>
               ))}
            </div>
        </div>
        </>
    )
}