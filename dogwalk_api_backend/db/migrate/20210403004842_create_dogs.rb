class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.integer :weight
      t.text :allergies
      t.text :behaviors
      t.text :meds
      t.text :vet_info
      t.integer :age
      t.owner :references

      t.timestamps
    end
  end
end
