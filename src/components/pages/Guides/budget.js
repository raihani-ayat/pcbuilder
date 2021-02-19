import React from 'react'
import Blog from '../../Blog'
import Footer from '../../Footer'
import NavBar from '../../NavBar'

function budget() {
    return (
        <>

        <NavBar />
        <Blog
            title="Budget Home Office Build"
            src="images/set.jpg"
            t1='CPU'
            p1='Our CPU of choice for this home/office machine is the AMD Ryzen 3 3200G. This processor has four cores, 
            onboard graphics, and is aptly suited for all software in the Microsoft Office suite or the comparable open source offerings.
             The Ryzen 3 3200G includes a stock cooler so a 3rd-party cooler is not necessary.'
            t2='Motherboard'
            p2='We are using a parametric selection of motherboards that have been updated to be compatible out of the box with the Ryzen 3 3200G without requiring a BIOS update.
             They also include 2-4 DIMM slots for up to 64GB of DDR4 RAM and a front panel USB3 header.'
            t3='Memory'
            p3='A parametric filter is being applied to choose the best priced 2x8GB kit of memory within AMD s recommended specifications.
             Ryzen scales well with memory frequency so we have upped the minimum speed to DDR4-3000.'
            t4='Storage'
            p4='We are also using parametric filters to select the best priced 480GB or larger solid state drive. Everyone s needs are different,
             so feel free to change out capacities to fit yours or swap to a high capacity hard drive if storage space is more important.'
            t5='Case'
            p5='We have set a parametric filter for the best-priced GeForce GTX 1650 SUPER, which will let you play any popular game
             available today, including Valorant, FThe Thermaltake Versa H15 is a budget friendly, quiet case that can fit all of our components.
              The case has a USB2 port, USB3 port, 5.25" bay for an optical drive, and multiple options for cable management.ortnite, PUBG, and Apex Legends.'
            t6='PSU'
            p6='For the PSU, we are using a parametric selection of a 
            few well-reviewed units which are all rated for good power efficiency and can provide plenty of power for this build.'
        />
        <Footer />


        </>
    )
}

export default budget
