class OwnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :dogs
  has_many :dogs
end
