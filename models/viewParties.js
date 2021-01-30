//Database calls with sequlize orm for movie object

module.exports =function(sequelize, DataTypes){
    let ViewParty = sequelize.define("ViewParty",{
        OMDBId:{
            type: DataTypes.STRING,
            allowNull:false
        },
        viewDate: {
            type: DataTypes.DATE,
            allowNull:false
        },
        viewerNumber: {
            type: DataTypes.INTEGER,
            allowNull:false
        }
    });

    return ViewParty;
}