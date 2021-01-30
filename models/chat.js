module.exports = function(sequelize,DataTypes){
    const Chat = sequelize.define("Chat",{
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Chat.associate = (models) =>{
    //     Chat.belongsto(models.ViewParty,{

    //     });
    // }

    return Chat;

}