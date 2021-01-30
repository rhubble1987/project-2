module.exports = function(sequelize,DataTypes){
    const Chat = sequelize.define("Chat",{
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        timestamp: {
            type: DataTypes.DATETIME,
            defaultValue: Sequelize.NOW
        }
    });

    Chat.associate = (models) =>{
        Chat.hasOne(models.ViewParty,{

        });
    }

    return Chat;

}