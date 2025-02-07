import React from 'react'
import './Footer.css';
import { Youtube, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

function Footer() {

    const links = [
        {
            topic: 'About us',
            content: [
               { name: 'Our story', href: '#' },
               { name: 'Why us', href: '#' },
               { name: 'How it works', href: '#' },
               { name: 'FAQ', href: '#' }
            ],
        },
        {
            topic: 'Our cabins',
            content: [
               { name: 'North of London', href: '#' },
               { name: 'Golden Hideaway', href: '#' },
               { name: 'Oak Treehouse', href: '#' },
               { name: 'Acacia Retreat', href: '#' },
               { name: 'Blue Lagoon', href: '#' }
            ],
        },
        {
            topic: 'Get inspired',
            content: [
               { name: 'Explore nature', href: '#' },
               { name: 'Hiking trails', href: '#' },
               { name: 'Swimming', href: '#' },
               { name: 'Fishing', href: '#' },
               { name: 'Boating', href: '#' },
               { name: 'Cycling', href: '#' }
            ],
        },
        {
            topic: 'Great food and drink',
            content: [
               { name: 'Pubs', href: '#' },
               { name: 'Restaurants', href: '#' },
               { name: 'Food markets', href: '#' },
               { name: 'Picnics', href: '#' }
            ],
        },
        {
            topic: 'Support',
            content: [
               { name: 'Help', href: '#' },
               { name: 'Contact us', href: '#' },
               { name: 'Privacy Policy', href: '#' },
               { name: 'Terms of Service', href: '#' },
               { name: 'Complaints Policy', href: '#' }
            ],
        },
    ];

    const secondLinks = []

    const socials = [
       <Linkedin />,    
       <Twitter />,
       <Facebook />,
       <Instagram />,
       <Youtube />,
    ]    

  return (
    <div className="footer-bg">
        <div className="footer">
            <div className="row">
                {
                    links.map(link => (
                        <div className="col">
                            <p>{link.topic}</p>
                            <ul>
                                {
                                    link.content.map(content => (
                                        <li><a href={content.href}>{content.name}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className="row">

            </div>
            <div className="row">
                <div className="content">
                    <p>Sign up to our Newsletter</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis libero quia cumque, nihil totam quam facilis ipsam illum aperiam similique</p>
                </div>
                <div className="news">
                    <input type="text" placeholder='james@thegiantpeach.com' />
                    <button>join the mailing list</button>
                </div>
            </div>
            <div className="row">
                {/* logo */}
                <div className="logo">
                    <p>unwind<span>cabins</span></p>
                </div>
                <p className="copy">&copy; 2023 UnwindCabins</p>
                <div className="social-bar">
                    {
                        socials.map(social => (
                            <div className="social-icon">
                                {social}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer