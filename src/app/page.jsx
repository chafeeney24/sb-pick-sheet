"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
            {/* Page Header */}
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Feeney Super Bowl Pick Sheet
                </h1>
                <div className="text-center">
                    <Link href="/leaderboard" className="text-blue-600 hover:underline">
                        View Leaderboard
                    </Link>
                </div>
            </header>

            {message && <p className="mb-4 text-green-600">{message}</p>}

            <form onSubmit={handleSubmit}>
                {/* Name Field */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">Your Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>

                {/* 1. National Anthem Length */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
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

                {/* 2. Coin Toss Result */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        2. Coin toss result:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="coinToss"
                                value="Heads"
                                checked={formData.coinToss === "Heads"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Heads
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="coinToss"
                                value="Tails"
                                checked={formData.coinToss === "Tails"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Tails
                        </label>
                    </div>
                </div>

                {/* 3. Game Winner */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">3. Game winner:</label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="gameWinner"
                                value="Team A"
                                checked={formData.gameWinner === "Team A"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gameWinner"
                                value="Team B"
                                checked={formData.gameWinner === "Team B"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team B
                        </label>
                    </div>
                </div>

                {/* 4. Game Total */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">4. Game total:</label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="gameTotal"
                                value="Over 50"
                                checked={formData.gameTotal === "Over 50"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gameTotal"
                                value="Under 50"
                                checked={formData.gameTotal === "Under 50"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 50
                        </label>
                    </div>
                </div>

                {/* 5. First Offensive Play */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        5. First offensive play of the game:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="firstOffensivePlay"
                                value="Run"
                                checked={formData.firstOffensivePlay === "Run"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Run
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="firstOffensivePlay"
                                value="Pass"
                                checked={formData.firstOffensivePlay === "Pass"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Pass
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="firstOffensivePlay"
                                value="Other"
                                checked={formData.firstOffensivePlay === "Other"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Other
                        </label>
                    </div>
                </div>

                {/* 6. Score in First 6m59 */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        6. Will there be a score in the first 6 minutes 59 seconds?
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="scoreFirst6m59"
                                value="Yes"
                                checked={formData.scoreFirst6m59 === "Yes"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="scoreFirst6m59"
                                value="No"
                                checked={formData.scoreFirst6m59 === "No"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* 7. Team to Score First */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        7. Team to score first:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="teamToScoreFirst"
                                value="Team A"
                                checked={formData.teamToScoreFirst === "Team A"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="teamToScoreFirst"
                                value="Team B"
                                checked={formData.teamToScoreFirst === "Team B"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team B
                        </label>
                    </div>
                </div>

                {/* 8. Jersey Number of First Touchdown Scorer */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        8. Jersey number of first touchdown scorer:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="firstTouchdownJersey"
                                value="Under 50"
                                checked={formData.firstTouchdownJersey === "Under 50"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="firstTouchdownJersey"
                                value="50 or above"
                                checked={formData.firstTouchdownJersey === "50 or above"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            50 or above
                        </label>
                    </div>
                </div>

                {/* 9. First Accepted Penalty */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        9. First accepted penalty will be against:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="firstPenaltyAgainst"
                                value="Team A"
                                checked={formData.firstPenaltyAgainst === "Team A"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="firstPenaltyAgainst"
                                value="Team B"
                                checked={formData.firstPenaltyAgainst === "Team B"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team B
                        </label>
                    </div>
                </div>

                {/* 10. Score in Final Two Minutes of First Half */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        10. A score in the final two minutes of the first half:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="scoreFinalTwoMinFirstHalf"
                                value="Yes"
                                checked={formData.scoreFinalTwoMinFirstHalf === "Yes"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="scoreFinalTwoMinFirstHalf"
                                value="No"
                                checked={formData.scoreFinalTwoMinFirstHalf === "No"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* 11. Three Consecutive Scores */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        11. Will a team score 3 consecutive times (not incl PATs):
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="threeConsecutiveScores"
                                value="Yes"
                                checked={formData.threeConsecutiveScores === "Yes"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="threeConsecutiveScores"
                                value="No"
                                checked={formData.threeConsecutiveScores === "No"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* 12. Jalen Hurts Passing Yards */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        12. Jalen Hurts passing yards:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="hurtsPassingYards"
                                value="Over 250"
                                checked={formData.hurtsPassingYards === "Over 250"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 250
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="hurtsPassingYards"
                                value="Under 250"
                                checked={formData.hurtsPassingYards === "Under 250"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 250
                        </label>
                    </div>
                </div>

                {/* 13. Patrick Mahomes Passing Yards */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        13. Patrick Mahomes passing yards:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="mahomesPassingYards"
                                value="Over 300"
                                checked={formData.mahomesPassingYards === "Over 300"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 300
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="mahomesPassingYards"
                                value="Under 300"
                                checked={formData.mahomesPassingYards === "Under 300"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 300
                        </label>
                    </div>
                </div>

                {/* 14. Total Receiving Yards - A.J. Brown */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        14. Total receiving yards - A.J. Brown:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="ajBrownReceivingYards"
                                value="Over 100"
                                checked={formData.ajBrownReceivingYards === "Over 100"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 100
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="ajBrownReceivingYards"
                                value="Under 100"
                                checked={formData.ajBrownReceivingYards === "Under 100"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 100
                        </label>
                    </div>
                </div>

                {/* 15. Total Receiving Yards - Travis Kelce */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        15. Total receiving yards - Travis Kelce:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="kelceReceivingYards"
                                value="Over 100"
                                checked={formData.kelceReceivingYards === "Over 100"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 100
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="kelceReceivingYards"
                                value="Under 100"
                                checked={formData.kelceReceivingYards === "Under 100"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 100
                        </label>
                    </div>
                </div>

                {/* 16. Total Rushing Yards - Saquon Barkley */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        16. Total rushing yards - Saquon Barkley:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="barkleyRushingYards"
                                value="Over 80"
                                checked={formData.barkleyRushingYards === "Over 80"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 80
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="barkleyRushingYards"
                                value="Under 80"
                                checked={formData.barkleyRushingYards === "Under 80"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 80
                        </label>
                    </div>
                </div>

                {/* 17. Longest Successful Field Goal */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        17. Length of longest successful field goal (in yards):
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="longestFieldGoal"
                                value="Over 50"
                                checked={formData.longestFieldGoal === "Over 50"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 50
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="longestFieldGoal"
                                value="Under 50"
                                checked={formData.longestFieldGoal === "Under 50"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 50
                        </label>
                    </div>
                </div>

                {/* 18. Longest Touchdown */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        18. Length of longest touchdown (in yards):
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="longestTouchdown"
                                value="Over 60"
                                checked={formData.longestTouchdown === "Over 60"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 60
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="longestTouchdown"
                                value="Under 60"
                                checked={formData.longestTouchdown === "Under 60"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 60
                        </label>
                    </div>
                </div>

                {/* 19. Team with Longest Touchdown */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        19. Team with longest touchdown:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="teamLongestTouchdown"
                                value="Team A"
                                checked={formData.teamLongestTouchdown === "Team A"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team A
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="teamLongestTouchdown"
                                value="Team B"
                                checked={formData.teamLongestTouchdown === "Team B"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Team B
                        </label>
                    </div>
                </div>

                {/* 20. Total QB Sacks */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        20. Total QB sacks:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="totalQBSacks"
                                value="Over 3"
                                checked={formData.totalQBSacks === "Over 3"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 3
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="totalQBSacks"
                                value="Under 3"
                                checked={formData.totalQBSacks === "Under 3"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 3
                        </label>
                    </div>
                </div>

                {/* 21. Total Turnovers */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        21. Total turnovers:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="totalTurnovers"
                                value="Over 2"
                                checked={formData.totalTurnovers === "Over 2"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 2
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="totalTurnovers"
                                value="Under 2"
                                checked={formData.totalTurnovers === "Under 2"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 2
                        </label>
                    </div>
                </div>

                {/* 22. Number of Challenges */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        22. Number of challenges initiated by coaches:
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="numberChallenges"
                                value="Over 3"
                                checked={formData.numberChallenges === "Over 3"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Over 3
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="numberChallenges"
                                value="Under 3"
                                checked={formData.numberChallenges === "Under 3"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Under 3
                        </label>
                    </div>
                </div>

                {/* 23. Missed Extra Point */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        23. Will there be a missed extra point (1 or 2 pt):
                    </label>
                    <div className="flex items-center space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="missedExtraPoint"
                                value="Yes"
                                checked={formData.missedExtraPoint === "Yes"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="missedExtraPoint"
                                value="No"
                                checked={formData.missedExtraPoint === "No"}
                                onChange={handleChange}
                                className="mr-1"
                            />
                            No
                        </label>
                    </div>
                </div>

                {/* 24. Gatorade Bath Color */}
                <div className="mb-6">
                    <label className="block mb-1 font-semibold">
                        24. Color of Gatorade bath:
                    </label>
                    <select
                        name="gatoradeBathColor"
                        value={formData.gatoradeBathColor}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="Orange">Orange</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* 25. Superbowl MVP Position */}
                <div className="mb-8">
                    <label className="block mb-1 font-semibold">
                        25. Position of Superbowl MVP:
                    </label>
                    <select
                        name="superbowlMVPPosition"
                        value={formData.superbowlMVPPosition}
                        onChange={handleChange}
                        className="border rounded p-2 w-full"
                    >
                        <option value="QB">QB</option>
                        <option value="RB">RB</option>
                        <option value="WR">WR</option>
                        <option value="TE">TE</option>
                        <option value="K">K</option>
                        <option value="DEF">DEF</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Submit Picks
                    </button>
                </div>
            </form>
        </div>
    );
}
