class DogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :breed, :weight, :allergies, :behaviors, :meds, :vet_info, :age, :owner_id, :owner
end