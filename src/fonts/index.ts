import localFont from "next/font/local";

export const pobeda = localFont({
    src: [
        {
            path: '../fonts/pobeda-regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/pobeda-bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-pobeda',
});

export const sverdlovsk = localFont({
    src: '../fonts/sverdlovsk.otf',
    variable: '--font-sverdlovsk',
});

export const montserrat = localFont({
    src: '../fonts/Montserrat-Medium.ttf',
    variable: '--font-montserrat',
})