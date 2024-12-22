import { treatments, maxsaket, blkmax } from "./cards"
export default [
    {
        name: "Top Doctors For Cardiolog",
        link: "/top-doctors/cardiology"
    },
    {
        name: "Top Doctors For Urology",
        link: "/top-doctors/urology"
    },
    {
        name: "Top Doctors For Oncology",
        link: "/top-doctors/oncology"
    },
    {
        name: "Top Doctors For Dermatology",
        link: "/top-doctors/dermatology"
    },
    {
        name: "Top Doctors For Endocrinology",
        link: "/top-doctors/endocrinology"
    },
    {
        name: "Top Doctors For Kidney Transplant",
        link: "/top-doctors/kidneytransplant"
    },
    {
        name: "Top Doctors For Vascular Surgery",
        link: "/top-doctors/vascularsurgery"
    },
    {
        name: "Top Doctors For Liver Transplant",
        link: "/top-doctors/livertransplant"
    },
    {
        name: "Top Doctors For Robotic Surgery",
        link: "/top-doctors/roboticsurgery"
    },
    {
        name: "Top Hospitals In India",
        link: "/our-hospitals"
    },
    {
        name: "Treatments",
        link: "/our-treatments"
    },
    ...treatments,
    ...(Object.keys(maxsaket).map(key=>maxsaket[key])),
    ...(Object.keys(blkmax).map(key=>blkmax[key])),
    {
        name: "Max Saket Hospital New Delhi",
        link: "/hospitals/maxsaket"
    },
    {
        name: "BLK Max Hospital New Delhi",
        link: "/hospitals/blkmax"
    },
    {
        name: "Max Hospital Dwarka New Delhi",
        link: "/hospitals/maxdwarka"
    },
    {
        name: "Aakash Hospital New Delhi",
        link: "/hospitals/aakash"
    }
]