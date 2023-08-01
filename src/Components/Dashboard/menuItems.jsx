const studentMenuItems = [
    {
        name: 'Dashboard',
        url: "/dashboard",
    },
    {
        name: 'My Classes',
        url: "/dashboard/my-classes",
    },
    {
        name: 'Payment History',
        url: "/dashboard/payment-history",
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
        name: "Add Course",
        url: "/dashboard/add-new-course"
    },
    {
        name: 'Instractors',
        url: "/dashboard/instructors",
    },
    {
        name: 'Users',
        url: "/dashboard/users",
    },
]

export {studentMenuItems, instractorsMenuItems, adminMenuItems}