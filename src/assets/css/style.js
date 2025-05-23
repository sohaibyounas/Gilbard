const style = {
    // Header Section
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        gap: "10px",
        backgroundColor: "#081B1F",
        color: "#fff",
    },

    headerimg: {
        width: "100px",
        paddingLeft: "43px",
    },

    headerMenu: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        gap: "7px",
        color: "#fff",
        fontfamily: '"Poppins", sans-serif !important',
    },

    headerMenuList: {
        display: "flex",
        gap: "10px"
    },

    headListColor: {
        color: "#6C757D",
    },

    searchIcon: {
        color: "#fff",
    },

    // Hero Section
    hero: {
        position: "relative",
        minHeight: "750px",
    },

    heroimg: {
        objectFit: "cover",
    },

    btnbox: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
    },

    heroText: {
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        fontSize: "90px",
        fontWeight: 400,
        lineHeight: "108px",
        color: "#fff",
        zIndex: 2,
    },

    heroButton: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
        zIndex: 2,
    },

    heroArrowBox: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        color: "#989FA1",
        fontSize: "20px",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
    },

    heroPrevIcon: {
        fontSize: "30px",
        color: "#989FA1",
        transition: "color 0.3s",
        "&:hover": {
            color: "#fff",
        },
    },

    heroNexIcon: {
        fontSize: "30px",
        color: "#989FA1",
        transition: "color 0.3s",
        "&:hover": {
            color: "#fff",
        },
    },

    // Button Component
    butnBox: {
        textAlign: "center",
        cursor: "pointer",
    },

    heroMuiButton: {
        borderRadius: "25px",
        backgroundColor: "#fff",
        color: "#000",
        padding: "10px 30px",
        fontSize: "20px",
    },


};

export default style;