module.exports = function(sequelize,DataTypes){
    const Chat = sequelize.define("Chat",{
        author: {
            type: DataTypes.STRING,
            allowNull:true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    
    return Chat;

}