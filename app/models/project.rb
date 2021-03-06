class Project < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
  validates :code, presence: true
  validates_uniqueness_of :code
end
