from django.views.generic import TemplateView


class indexview(TemplateView):
    template_name = "index.html"


class languagesview(TemplateView):
    template_name = "languages.html"


class portfolioview(TemplateView):
    template_name = "portfolio.html"
