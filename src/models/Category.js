// Model de categorias

module.exports = (sequel, TypeOfData) => {
    const Categ = sequel.define('Category', {
        name: TypeOfData.STRING,
        id: { type: TypeOfData.INTEGER, primaryKey: true, autoIncrement: true },
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'categories',
    });
    
    return Categ;
};
