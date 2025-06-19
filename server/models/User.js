// Модель пользователя (заглушка)
class User {
    constructor(id, name, email, passwordHash, avatar) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.avatar = avatar;
    }
}
module.exports = User; 