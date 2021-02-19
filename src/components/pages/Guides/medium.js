import React from 'react'
import Blog from '../../Blog'
import Footer from '../../Footer'
import NavBar from '../../NavBar'

function medium() {
    return (
        <>

        <NavBar />
        <Blog
            title="Intermediate Level Build"
            src="images/set1.jpg"
            des="The Modest Intel build guide is focused on providing the best performance per dollar on a mid range gaming PC.The components are straightforward to install and the system will run games at 1080p or higher without issue. "
            t1='CPU'
            p1='Our Modest Intel Gaming Build is centered around the Intel Core i5-9400F. 
            Using the included CPU cooler you will be able to keep temperatures and noise low on this locked processor.'
            t2='Motherboard'
            p2='We have paired the i5-9400F with a parametric filter of Micro ATX B365 motherboards that support up to 64GB of DDR4 memory, 
            multiple SATA6 ports for storage drives, and front panel USB3.0 ports. 
            The parametric filter is constantly updating to show the best priced product based on the specifications we have set. '
            t3='Memory'
            p3='We are filtering for a 2x8GB kit of DDR4 RAM with a speed of at least DDR4-2666. B365 has a maximum speed of 2666Mhz 
            but is compatible with higher frequency memory provided that you run it at the lower speed.
             We are not strictly limiting to DDR4-2666 because higher speed memory is compatible and often available at a lower cost.

            Since the parametric filter picks the lowest priced option available (regardless of color/design), 
            click the "From parametric filter" link to view other options that might better suit your aesthetic preference.'
            t4='Storage'
            p4='We are also using a parametric filter that will actively select the best-priced SSD of at least 1TB capacity. 
            Solid states drives are significantly faster than hard drives and one of the easiest ways to improve system responsiveness and load times for both applications and games. 
            Everyones storage needs differ, so feel free to change the capacity to your usage.'
            t5='GPU'
            p5='The Nvidia GeForce GTX 1660 Super is an excellent mid-range graphics card that will let you play any popular game available today at 1080p or 1440p, including Fortnite, PUBG, Call of Duty: Modern Warfare and Apex Legends.

            To keep the noise and temperatures down, the filter requires a minimum length to avoid "mini" versions of the card, which prioritize fitting into small builds, such as an ITX case. It also requires a minimum number of 2 fans to avoid "blower" style cards, which usually do not cool the card as well. You can choose to use this filter instead, 
            if you want to include the smaller cards for any reason. Note that smaller cards will be louder or hotter - or both.'
            t6='Case'
            p6='The Cooler Master MasterBox Q300L is a MicroATX Mini Tower case with two USB3 ports and fits
             full-size graphics cards without issue.
             It provides several cable management holes as well as a mesh front panel for better airflow.'
            t7='PSU'
            p7='For our power supply, we are using a parametric selection of well-reviewed units, 
            all of which will provide more than enough power for this system.' 
        />
        <Footer />


        </>
    )
}

export default medium
