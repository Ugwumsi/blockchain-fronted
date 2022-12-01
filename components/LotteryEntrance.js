import { useWeb3Contract } from "react-moralis"
import {abi, contractAddresses} from "../constants/index.js"
import {useMoralis} from "react-moralis"
import { useEffect, useState } from "react"
import { ethers } from "ethers"

export default function LotteryEntrance(){

    const {chainId: chainIdHex, isWeb3Enabled} = useMoralis()
    const chainId = parseInt(chainIdHex)
    console.log(chainId)
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    console.log(raffleAddress)

    // const {chainId: chainIdHex, isWeb3Enabled} = useMoralis()
    // const chainId = parseInt(chainIdHex)
    // console.log(chainId)
    // const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null
    //console.log(raffleAddress)

    // const [entranceFee, setEntranceFee] = useState("0")
    // const{runContractFunction: enterRaffle} = useWeb3Contract({ 
    //     abi: abi,
    //     contractAddress: raffleAddress,
    //     fucntionName: "enterRaffle",
    //     msgvalue: entranceFee,
    //     params: {},
    // })

    const{runContractFunction: getEntranceFee} = useWeb3Contract({ 
        abi: abi,
        contractAddress: raffleAddress,
        fucntionName: "getEntranceFee",
        params: {},

    })
    

    useEffect(() => {
        if(isWeb3Enabled){
            async function updateUI() {
                const something = await getEntranceFee()
                console.log(something)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

    // useEffect(() => {
    //     if (isWeb3Enabled){
            
    //         async function updateUI() {
    //             const something = await getEntranceFee()
    //             console.log(something)
    //         //     const entranceFeeFromCall = (await getEntranceFee())//.toString()
    //         //     console.log(entranceFeeFromCall)
    //         //     // setEntranceFee(ethers.utils.formatUnits(entranceFeeFromCall), "ether")
                

    //         }
    //         updateUI()
    //     }
            
    // }, [isWeb3Enabled]) 


    //<div>Entrance Fee: {entranceFee} ETH</div>
    return <div>
        Hello from the other side
    </div>
}