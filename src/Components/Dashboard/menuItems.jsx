const studentMenuItems = [
    {
        name: 'Dashboard',
        url: "/dashboard",
    },
    {
        name: 'My Classes',
        url: "/dashboard",
    },
    {
        name: 'Payment History',
        url: "/dashboard",
    },
    {
        name: 'My Profile',
        url: "/dashboard",
    }
];

const instractorsMenuItems = [
    {
        name: 'dashboard',
        to: "/home",
    },
    {
        name: 'My Classes',
        url: "/",
    },
    {
        name: 'My Students',
        url: "/",
    },
    {
        name: 'Contact',
        url: "/",
    }
]

const adminMenuItems = [
    {
        name: 'Dashboard',
        url: "/dashboard",
    },
    {
        name: 'All Course',
        url: "/course",
    },
    {
        name: 'Instractors',
        url: "/instracots",
    },
    {
        name: 'Students',
        url: "/dashboard/users",
    },
]

export {studentMenuItems, instractorsMenuItems, adminMenuItems}