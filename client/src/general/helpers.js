export function getRoleFromId(id) {
    switch (id) {
        case 1:
            return 'super_admin';
        case 2:
            return 'admin';
        default:
            return 'intern'
    }
}

export function generateRoleId(role) {
    switch (role) {
        case 'super_admin':
            return 1;
        case 'admin':
            return 2;
        default:
            return 3;
    }
}