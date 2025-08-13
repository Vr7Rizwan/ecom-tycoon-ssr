import React from 'react'
import ReviewsClient from './clientSideComponents/ReviewsClient'
const kayakLogo = "/assets/Reviews/kayakLogo.webp";
const avatar = "/assets/Reviews/Man_Avatar.webp";
const stanfordLogo = "/assets/Reviews/stanfordLogo.webp";
interface Review {
  logo: string;
  content: string;
  avatar: string;
  personName: string;
  designation: string;
  companyName: string;
  category: string;
}
interface reviewArray{
  allReviews : Review[]
}
  const allReviews  = [
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "finance",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
    {
      category: "technology",
      companyName: "Stanford",
      logo: stanfordLogo,
      content: `"Our affiliation with Yasser Bashir began 6 or 7 years ago. We, at the Stanford/NASA Biocomputation Center at Stanford University, were one of his first clients. Our requests to Yasser and his capable group have ranged from lengthy, mundane photoshop masking on thousands of anatomical images to utterly complex dental simulations and cross platform software development for PCs and Macs. Our previous experience of working with programmers at a great distance was unsatisfactory, but we have enjoyed remarkable success with Yasser. The distance has never been an issue. He is always accessible. Our communications, without exception, have been easy and more than satisfactory. Our demands for world class quality have always been met. It is with pleasure and confidence that we continue to work closely with this exceptional group."`,
      personName: "Jonathan",
      designation: "General Manager",
      avatar: avatar,
    },
    {
      category: "healthcare",
      companyName: "Stanford",
      logo: stanfordLogo,
      content: `"Our affiliation with Yasser Bashir began 6 or 7 years ago. We, at the Stanford/NASA Biocomputation Center at Stanford University, were one of his first clients. Our requests to Yasser and his capable group have ranged from lengthy, mundane photoshop masking on thousands of anatomical images to utterly complex dental simulations and cross platform software development for PCs and Macs. Our previous experience of working with programmers at a great distance was unsatisfactory, but we have enjoyed remarkable success with Yasser. The distance has never been an issue. He is always accessible. Our communications, without exception, have been easy and more than satisfactory. Our demands for world class quality have always been met. It is with pleasure and confidence that we continue to work closely with this exceptional group."`,
      personName: "Jonathan",
      designation: "General Manager",
      avatar: avatar,
    },
    {
      category: "healthcare",
      companyName: "Stanford",
      logo: stanfordLogo,
      content: `"Our affiliation with Yasser Bashir began 6 or 7 years ago. We, at the Stanford/NASA Biocomputation Center at Stanford University, were one of his first clients. Our requests to Yasser and his capable group have ranged from lengthy, mundane photoshop masking on thousands of anatomical images to utterly complex dental simulations and cross platform software development for PCs and Macs. Our previous experience of working with programmers at a great distance was unsatisfactory, but we have enjoyed remarkable success with Yasser. The distance has never been an issue. He is always accessible. Our communications, without exception, have been easy and more than satisfactory. Our demands for world class quality have always been met. It is with pleasure and confidence that we continue to work closely with this exceptional group."`,
      personName: "Jonathan",
      designation: "General Manager",
      avatar: avatar,
    },
    {
      category: "technology",
      companyName: "Kayak",
      logo: kayakLogo,
      content: `“Arbisoft has been my most trusted technology partner for now over 15 years. Arbisoft has very unique methods of recruiting and training, and the results demonstrate that. They have great teams, great positive attitudes and great communication.”`,
      personName: "Paul",
      designation: "CEO",
      avatar: avatar,
    },
  ];

export default function ReviewsServer() {
  return <ReviewsClient allReviews={allReviews} />
  
}
