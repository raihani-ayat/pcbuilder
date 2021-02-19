import React from 'react'
import Blog from '../../Blog'
import Footer from '../../Footer'
import NavBar from '../../NavBar'

function excellent() {
    return (
        <>
            <NavBar />
            <Blog 
            
            title="Advanced Level Build"
            src="images/set1.jpg"
            des="This PC is designed to deliver high performance on all of today's most popular games without being complicated to build or costing too much.
             It will run well at high settings on 1080p or higher when playing Valorant, Fortnite, Minecraft, Call of Duty, Rainbow Six Siege, Apex Legends, PUBG, and more. "
            t1='CPU'
            p1='The AMD Ryzen 5 3600 provides some of the best bang for your buck. It offers 6 cores, 12 threads, a base frequency of 3.6GHz, and a turbo frequency of 4.2GHz.
                This CPU includes a stock cooler, so no additional CPU cooler is required for this build. However, if you would like a quieter build or cooler CPU,'
            t2='Motherboard'
            p2='We are using a parametric filter to constantly select the best-priced motherboard while meeting selected criteria. In this case, we are filtering for ATX B550 chipsets and up to 4 DDR4 DIMM slots for future expansion. The compatibility engine will filter out anything not compatible with the build,
             and it will automatically update with the best priced option as prices change. '
            t3='Memory'
            p3='We are filtering for a 2x8GB kit of DDR4 RAM with a speed of at least DDR4-3200 and a CAS latency of 16 or lower, as Ryzen CPUs scale well with faster memory.'
            t4='Storage'
            p4='With Solid State Drives (SSDs) the PC will boot, open programs, and load games considerably faster than mechanical drives.
                Since storage needs may differ, adjust the capacity as needed. We recommend at least 500 GB of SSD storage. 1TB typically provides the most optimal storage capacity for the price. We are use parametric filters to incorporate an SSD with at least 960GB of space.'
            t5='GPU'
            p5='The AMD Radeon RX 5700 XT will provide a consistent 60fps on many demanding games like PUBG at Ultra at 1080p, and even 1440p for some games like Apex Legends. It will also handle Fortnite with zero issues.
            To keep the noise and temperatures down, the filter requires a minimum length to avoid mini  versions of the card, which prioritize fitting into small builds, such as an ITX case. It also requires a minimum number of 2 fans to avoid "blower" style cards, which usually do not cool the card as well. You can choose to use this filter instead, if you want to include the smaller cards for any reason. 
            Note that smaller cards will be louder or hotter - or both.'
            t6='Case'
            p6='All of our parts are on display in the Phanteks Eclipse P300A Mesh mid tower case. This case sports a
             tempered glass side panel. It also includes 2x USB 3.0 front panel ports, as well as a PSU shroud and a number
             of cable management holes and tie-offs to help your build look cleaner. It can also fit full-sized video cards.'
            t7='PSU'
            p7='We are using a parametric selection of well-reviewed units, all of which are 80+ Bronze certified or above and can provide plenty of power for this build. 
            Note that because there are issues with PSU availability right now, 
            some non-modular PSUs have been added to the build to help you get the parts you need. These are still high quality PSUs.' />
            <Footer />
        </>
    )
}

export default excellent
