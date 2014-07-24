module ApplicationHelper
  def flash_class level
    case level
      when 'notice'  then "alert alert-info"
      when 'success' then "alert alert-success"
      when 'error'   then "alert alert-danger"
      when 'alert'   then "alert alert-warning"
    end
  end

  def exclude_nav?
    black_list = [new_user_registration_path]

    black_list.any? do |url|
      current_page?(url)
    end
  end

  def avatar_url user, size= 100
    gravatar_id = Digest::MD5.hexdigest(user.email.downcase)
    "http://gravatar.com/avatar/#{gravatar_id}.png?s=#{size}"
  end

end
