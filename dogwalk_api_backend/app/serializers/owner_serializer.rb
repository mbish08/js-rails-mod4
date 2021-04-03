class OwnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :dogs
end
