export const sidebarMenu = {
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        x: 300,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const sidebarMenuOverlay = {
    open: {
        opacity: 1,
    },
    closed: {
        opacity: 0,
    }
}

export const mobile = {
    hidden: {
        opacity: 1
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}

export const slideFromLeft = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

export const slideFromRight = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

export const slideFromTop = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

export const fade = {
    hidden: {
        opacity: 0
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
};

export const duration = {
    type: "duration",
    damping: 10,
    stiffness: 30
}