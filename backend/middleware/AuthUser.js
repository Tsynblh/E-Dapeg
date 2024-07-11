const verifyUser = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
    }
    next();
};

const adminOnly = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
    }
    if (req.session.role !== 'admin') {
        return res.status(403).json({ msg: "Akses terlarang!" });
    }
    next();
};

module.exports = { verifyUser, adminOnly };
