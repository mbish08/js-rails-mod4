class OwnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  has_many :dogs
end
