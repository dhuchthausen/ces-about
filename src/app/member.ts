export class Member {
    name: string;
    imagesource: string;
    github?: string; //? = optional parameter
    xing?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
    stackoverflow?: string;
    bitbucket?: string;
    blog?: string;
    sonstiges?: string;
}
/*
    {
        name:
        imagesource:
        github:
        xing:
        twitter:
        linkedin: 
        email:
        stackoverflow: 
        bitbucket:
        blog: 
        sonstiges:
    },
*/

export const MEMBERS: Member[] = [
    {
        name:"Christoph Wolfes",
        imagesource:"https://www.gravatar.com/avatar/62a6fa374a54078b89e7038283e4719a.jpg?d=identicon",
        github:"https://github.com/cwolfes",
        xing: "https://www.xing.com/profile/Christoph_Wolfes"
    },
    {
        name:"Daniel Huchthausen",
        imagesource:"https://www.gravatar.com/avatar/bb7e6df6846b928c6bbb08ff1cbd7d9c.jpg?d=identicon",
        github:"https://github.com/dhuchthausen"
    },
    {
        name:"Daniel Sturm",
        imagesource:"https://www.gravatar.com/avatar/a6fcdb445d5df0ed591fb2e5e3af40d4.jpg?d=identicon",
        github:"https://github.com/dstulle",
        xing: "https://www.xing.com/profile/Daniel_Sturm6",
        twitter: "https://twitter.com/dstulle",
        linkedin: "https://www.linkedin.com/in/dstulle/",
        email: "daniel.sturm@cloudogu.com",
        stackoverflow: "https://stackoverflow.com/users/483335/dstulle",
        bitbucket: "https://bitbucket.org/dstulle/",
        blog: "http://blog.dstulle.de/",
        sonstiges: "http://dstulle.de/"
    },
    {
        name:"Iwan Schindler",
        imagesource:"https://www.gravatar.com/avatar/3254f4fee43d1e9824435cc65c78a977.jpg?d=identicon",
        github:"https://github.com/ischindler",
        xing: "https://www.xing.com/profile/Iwan_Schindler",
        email: "iwan.schindler@cloudogu.com"
    },
    {
        name:"Jan Niemann",
        imagesource:"https://www.gravatar.com/avatar/35407d6c1a9568b89e31c46671281efd.jpg?d=identicon",
        github:"https://github.com/janniemann"
    },
    {
        name:"Johannes Schnatterer",
        imagesource:"https://www.gravatar.com/avatar/619b9e796cddf5582c999a5f5a782a59.jpg?d=identicon",
        github:"https://github.com/schnatterer",
        xing:"https://www.xing.com/profile/Johannes_Schnatterer",
        twitter: "https://twitter.com/jschnatterer",
        email: "johannes.schnatter@cloudogu.com",
        stackoverflow: "https://stackoverflow.com/users/1845976/",
        blog: "http://blog.schnatterer.info/"
    },
    {
        name:"Lennart Ertingshausen",
        imagesource: "https://www.gravatar.com/avatar/8e5c6bb25c3cc0bcc699386270bd92ea.jpg?d=identicon"
    },    
    {
        name:"Maren Süwer",
        imagesource:"https://www.gravatar.com/avatar/20ad92404767b07a7ca0ce8eb8fa36d9.jpg?d=identicon",
        github:"https://github.com/msuewer",
        email: "maren.suewer@cloudogu.com"
    },
    {
        name:"Michael Behlendorf",
        imagesource:"https://www.gravatar.com/avatar/e5781ad28707dcf560fa1674d076ae59.jpg?d=identicon",
        github:"https://github.com/mbehlendorf",
        email: "michael.behlendorf@cloudogu.com"
    },
    {   name: "Miriam Malorny",
        imagesource: "https://www.gravatar.com/avatar/f8bcbe464694b14c28cfb544fb4ba5f6.jpg?d=identicon",
        xing: "https://www.xing.com/profile/Miriam_Malorny",
        email: "miriam.malorny@cloudogu.com"
    },
    {
        name: "Monique Porner",
        imagesource: "https://www.gravatar.com/avatar/e69dedf955f228f8496fd100c09c8554.jpg?d=identicon",
        github: "https://github.com/mporner",
        email: "monique.porner@cloudogu.com"
    },
    {
        name: "Nadja Kaul",
        imagesource: "https://www.gravatar.com/avatar/fad8e5284a8ee391102b3afdcefe3fd7.jpg?d=identicon",
        xing: "https://www.xing.com/profile/Nadja_Kaul",
        email: "nadja.kaul@cloudogu.com"
    },
    {
        name:"Oliver Milke",
        imagesource:"https://www.gravatar.com/avatar/dbe14e77409eb6d1e991ff11844a5cc4.jpg?d=identicon",
        github:"https://github.com/omilke",
        twitter: "https://twitter.com/OliverMilke",
        email: "oliver.milke@cloudogu.com",
        stackoverflow: "https://stackoverflow.com/users/2108919/omilke",
        blog: "http://oliver-milke.de/"
    },
    {
        name:"Philipp Czora",
        imagesource:"https://www.gravatar.com/avatar/546926e6e834a6dcb81ec0cfc06bc3d5.jpg?d=identicon",
        github:"https://github.com/pczora",
        twitter: "https://twitter.com/_pczora",
        stackoverflow: "https://stackoverflow.com/users/1219392/pczora"
    },
    {
        name:"Robert Auer",
        imagesource:"https://www.gravatar.com/avatar/52ead169cd6051ecd92865c039a2ff79.jpg?d=identicon",
        github:"https://github.com/robertauer"
    },
    {
        name: "Rolf Hein",
        imagesource: "https://www.gravatar.com/avatar/89c32c549ae70b7657cf8aeeb839dcce.jpg?d=identicon"
    },
    {
        name: "Sabrina Keller",
        imagesource: "https://www.gravatar.com/avatar/66a618c9d044a31efd795a0cfa9e136b.jpg?d=identicon",
        xing: "https://www.xing.com/profile/Sabrina_Keller",
        email: "sabrina.keller@cloudogu.com"
    },
    {
        name:"Sebastian Sdorra",
        imagesource:"https://www.gravatar.com/avatar/c8afb88b3858e1202d582122f94ed5f6.jpg?d=identicon",
        github:"https://github.com/sdorra",
        twitter: "https://twitter.com/@ssdorra",
        stackoverflow: "https://stackoverflow.com/users/579777/sdorra",
        bitbucket: "https://bitbucket.org/sdorra"
    },
    {
        name:"Stephan Christiann",
        imagesource:"https://www.gravatar.com/avatar/2e6371a9e270fd8aa9e6570a88f3b14e.jpg?d=identicon"
    },

    {
        name:"Thomas Grosser",
        imagesource:"https://www.gravatar.com/avatar/71df286b7e57c59d40b86b2d67d19b63.jpg?d=identicon"
    },
    {
        name: "Thomas Paliga",
        imagesource: "https://www.gravatar.com/avatar/b9df2a59bacf0997a01618e9c0e31f86.jpg?d=identicon"
    },
    {
        name: "Tino Friedrich",
        imagesource: "https://www.gravatar.com/avatar/e744c64db3edf0d2e84eeafda33de9eb.jpg?d=identicon"
    }
];