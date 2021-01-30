//Database calls with sequlize orm for movie object

module.exports =function(sequelize, DataTypes){
    const ViewParty = sequelize.define("ViewParty",{
        OMDBId:{
            type: DataTypes.STRING,
            allowNull:false
        },
        viewerNumber: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        viewDay: {
            type: DataTypes.STRING,
            allowNull: false
        },
        viewTime :{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    ViewParty.associate= (models)=>{
        ViewParty.hasMany(models.Chat,{
            onDelete: 'cascade'
        });
    };

    return ViewParty;
}