"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const initialState = {
        name: "",
        anthemLength: "Over 120 seconds",
        coinToss: "Heads",
        gameWinner: "Team A",
        gameTotal: "Over 50",
        firstOffensivePlay: "Run",
        scoreFirst6m59: "Yes",
        teamToScoreFirst: "Team A",
        firstTouchdownJersey: "Under 50",
        firstPenaltyAgainst: "Team A",
        scoreFinalTwoMinFirstHalf: "Yes",
        threeConsecutiveScores: "Yes",
        hurtsPassingYards: "Over 250",
        mahomesPassingYards: "Over 300",
        ajBrownReceivingYards: "Over 100",
        kelceReceivingYards: "Over 100",
        barkleyRushingYards: "Over 80",
        longestFieldGoal: "Over 50",
        longestTouchdown: "Over 60",
        teamLongestTouchdown: "Team A",
        totalQBSacks: "Over 3",
        totalTurnovers: "Over 2",
        numberChallenges: "Over 3",
        missedExtraPoint: "Yes",
        gatoradeBathColor: "Orange",
        superbowlMVPPosition: "QB"
    };

    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setMessage("Submission successful!");
                setFormData(initialState);
                // Optionally, you can redirect to the leaderboard page:
                // router.push('/leaderboard');
            } else {
                setMessage("Submission failed.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Submission error.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Super Bowl Prop Bets</h1>
            {message && <p className="mb-4 text-green-600">{message}</p>}
            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-4">
                    <label className="block mb-1">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>

                {/* 1. Length of National Anthem */}
                <div className="mb-4">
                    <label className="block mb-1">
                        1. Length of National Anthem (in seconds):
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="anthemLength"
                                value="Over 120 seconds"
                                checked={formData.anthemLength === "Over 120 seconds"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 120 seconds
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="anthemLength"
                                value="Under 120 seconds"
                                checked={formData.anthemLength === "Under 120 seconds"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 120 seconds
                        </label>
                    </div>
                </div>

                {/* (Other questions remain similar—using radio buttons or selects as before) */}
                {/* … */}

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                    Submit Picks
                </button>
            </form>
        </div>
    );
}
