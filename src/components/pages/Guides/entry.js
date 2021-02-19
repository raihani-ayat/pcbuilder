import React from 'react'
import Blog from '../../Blog'
import Footer from '../../Footer'
import NavBar from '../../NavBar'

function entry() {
    return (
        <>
            <NavBar />
                <Blog 
                 title="Entry Level Build"
                 src="images/set4.jpg"
                 t1='CPU'
                 p1='Our CPU of choice is the new Ryzen 5 2600. This older CPU was once priced at a higher price. 
                 With time bringing its price down, it s in reach for this build. It has 6 cores and 12 threads, with a boost clock of 3.9 GHz.
                    The Ryzen 5 2600 includes a stock cooler, so a 3rd-party cooler is not necessary.'
                 t2='Motherboard'
                 p2='We are using a parametric selection of motherboards that will be compatible with the Ryzen 5 2600. 
                 They also include 2-4 DIMM slots for up to 64GB of DDR4 RAM.'
                 t3='Memory'
                 p3='For this build and most machines outside of the top end we opted to go with 16GB of DDR4 memory. 
                 The parametric filter finds the best price on 2x8GB kits of memory that are within AMD’s recommended specifications.
                  We have limited it to DDR4-3200 or faster, as modern CPUs scale well with higher frequency memory.'
                 t4='Storage'
                 p4='We are also using a parametric filter to select the best priced SSD available that is at least 480GB. 
                 Everyone s storage needs are different, so feel free to change drive capacity or add a drive to fit yours.'
                 t5='GPU'
                 p5='We have set a parametric filter for the best-priced GeForce GTX 1650 SUPER, which will let you play any popular game
                  available today, including Valorant, Fortnite, PUBG, and Apex Legends.'
                 t6='Case'
                 p6='The Cougar MX330 is a windowed ATX mid tower case with 2x USB 2.0 and 2x USB 3.0 Gen 1 front panel ports and fits
                  full-size graphics cards without issue. It provides several cable management holes and a couple patterned magnetic dust filters for easy removal and cleaning. If you so wish, you can also move the I/O panel to up to six different locations on the case.'
                 t7='PSU'
                 p7='We are using a parametric selection of well-reviewed units, all of which are 80+ Bronze certified or above
                  and can provide plenty of power for this build. Note that because there are issues with PSU availability right now,
                   some non-modular PSUs have been added to the build to help you get the parts you need. These are still high quality PSUs.'
                 
                 />
            <Footer />
        </>
    )
}

export default entry
