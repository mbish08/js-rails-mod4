class Owner < ApplicationRecord
    has_many :dogs
    validates :name, presence: true
end
