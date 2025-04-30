"use client";

import { useEffect, useState } from "react";
import { getAuthTokenId } from "@/lib/utils/cookie";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const useAuth = () => {
    const [isMerchant, setIsMerchant] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const tokenId = getAuthTokenId();

        if (!tokenId) {
            router.push("/");
            return;
        }

        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const idTokenResult = await user.getIdTokenResult();
                const role = idTokenResult.claims.role;

                if (role === "merchant") {
                    setIsMerchant(true);
                }
            }
        });
    }, [router]);

    return isMerchant;
};

export default useAuth;
